import { useEffect, useState } from "react"
import styled from "styled-components"
import { Moon, Sun } from "lucide-react"

const SwitchContainer = styled.button`
  position: relative;
  width: 50px;
  height: 26px;
  background: linear-gradient(135deg, #e5e3dc 0%, #f6f4ef 100%);
  border: 1px solid #e5e3dc;
  border-radius: 13px;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(143, 167, 143, 0.4);
  }

  &.dark-mode {
    background: linear-gradient(135deg, #2b332f 0%, #1b1f1e 100%);
    border-color: #323938;
  }

  &.dark-mode:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`

const ToggleSlider = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${SwitchContainer}.dark-mode & {
    left: calc(100% - 24px);
    background: #e6ece8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  svg {
    width: 14px;
    height: 14px;
    transition: opacity 0.3s ease;
  }
`

const Switch = () => {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggle = () => {
    document.documentElement.classList.toggle("dark")
    const newIsDark = document.documentElement.classList.contains("dark")
    setIsDark(newIsDark)
  }

  if (!mounted) {
    return null
  }

  return (
    <SwitchContainer
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={isDark ? "dark-mode" : ""}
      title={isDark ? "Dark mode" : "Light mode"}
    >
      <ToggleSlider>
        <IconWrapper>
          {isDark ? (
            <Moon size={14} color="#2b332f" />
          ) : (
            <Sun size={14} color="#f59e0b" />
          )}
        </IconWrapper>
      </ToggleSlider>
    </SwitchContainer>
  )
}

export default Switch
