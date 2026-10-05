// ─── Base URL ────────────────────────────────────────────────────────────────
const BASE = "https://pokeapi.co/api/v2"

// ─── Shared Types ────────────────────────────────────────────────────────────

export interface PokemonType {
  slot: number
  name: string // e.g. "fire", "water"
}

export interface PokemonStat {
  name: string  // e.g. "hp", "attack", "defense", "speed"
  base: number
}

export interface PokemonMove {
  name: string
}

// ─── List Types ──────────────────────────────────────────────────────────────

/** Lightweight item returned by fetchPokemonList */
export interface PokemonListItem {
  id: number
  name: string
  types: PokemonType[]
  /** Official pixel sprite (online URL) */
  sprite: string
  /** Higher-res artwork (online URL) */
  artwork: string
}

// ─── Detail Types ────────────────────────────────────────────────────────────

export interface PokemonDetail {
  id: number
  name: string
  height: number   // decimetres
  weight: number   // hectograms
  types: PokemonType[]
  stats: PokemonStat[]
  moves: PokemonMove[]
  sprite: string
  artwork: string
  // Convenience stat accessors
  hp: number
  attack: number
  defense: number
  speed: number
}

// ─── Raw API shapes (minimal — only what we use) ─────────────────────────────

interface RawNamedResource {
  name: string
  url: string
}

interface RawPokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: RawNamedResource[]
}

interface RawPokemonType {
  slot: number
  type: RawNamedResource
}

interface RawPokemonStat {
  base_stat: number
  stat: RawNamedResource
}

interface RawPokemonMove {
  move: RawNamedResource
}

interface RawPokemon {
  id: number
  name: string
  height: number
  weight: number
  types: RawPokemonType[]
  stats: RawPokemonStat[]
  moves: RawPokemonMove[]
  sprites: {
    front_default: string | null
    other: {
      "official-artwork": {
        front_default: string | null
      }
    }
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function spriteUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

function artworkUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

function idFromUrl(url: string): number {
  // URL pattern: https://pokeapi.co/api/v2/pokemon/25/
  const parts = url.replace(/\/$/, "").split("/")
  return parseInt(parts[parts.length - 1], 10)
}

function mapTypes(raw: RawPokemonType[]): PokemonType[] {
  return raw.map((t) => ({ slot: t.slot, name: t.type.name }))
}

function mapStats(raw: RawPokemonStat[]): PokemonStat[] {
  return raw.map((s) => ({ name: s.stat.name, base: s.base_stat }))
}

function statValue(stats: PokemonStat[], statName: string): number {
  return stats.find((s) => s.name === statName)?.base ?? 0
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Fetch a paginated list of Pokémon with names, IDs, types, and sprite URLs.
 *
 * @param offset - Number of results to skip (default 0)
 * @param limit  - Number of results to return (default 20, max 100)
 */
export async function fetchPokemonList(
  offset = 0,
  limit = 20
): Promise<PokemonListItem[]> {
  const listRes = await fetch(`${BASE}/pokemon?offset=${offset}&limit=${limit}`)
  if (!listRes.ok) throw new Error(`PokeAPI list error: ${listRes.status}`)

  const listData: RawPokemonListResponse = await listRes.json()

  // Fetch all individual Pokémon in parallel for types
  const details = await Promise.all(
    listData.results.map(async (entry) => {
      const id = idFromUrl(entry.url)
      const res = await fetch(`${BASE}/pokemon/${id}`)
      if (!res.ok) throw new Error(`PokeAPI detail error for id ${id}: ${res.status}`)
      const raw: RawPokemon = await res.json()
      return raw
    })
  )

  return details.map((raw): PokemonListItem => ({
    id: raw.id,
    name: raw.name,
    types: mapTypes(raw.types),
    sprite: raw.sprites.front_default ?? spriteUrl(raw.id),
    artwork: raw.sprites.other["official-artwork"].front_default ?? artworkUrl(raw.id),
  }))
}

/**
 * Fetch full details for a single Pokémon by name or ID string.
 *
 * Includes HP, Attack, Defense, Speed stats, all moves, height, and weight.
 *
 * @param nameOrId - Pokémon name (e.g. "pikachu") or numeric ID as string
 */
export async function fetchPokemonDetail(nameOrId: string): Promise<PokemonDetail> {
  const res = await fetch(`${BASE}/pokemon/${nameOrId.toLowerCase()}`)
  if (!res.ok) throw new Error(`PokeAPI detail error for "${nameOrId}": ${res.status}`)

  const raw: RawPokemon = await res.json()
  const stats = mapStats(raw.stats)

  return {
    id: raw.id,
    name: raw.name,
    height: raw.height,
    weight: raw.weight,
    types: mapTypes(raw.types),
    stats,
    moves: raw.moves.map((m) => ({ name: m.move.name })),
    sprite: raw.sprites.front_default ?? spriteUrl(raw.id),
    artwork: raw.sprites.other["official-artwork"].front_default ?? artworkUrl(raw.id),
    // Convenience stat fields
    hp: statValue(stats, "hp"),
    attack: statValue(stats, "attack"),
    defense: statValue(stats, "defense"),
    speed: statValue(stats, "speed"),
  }
}
