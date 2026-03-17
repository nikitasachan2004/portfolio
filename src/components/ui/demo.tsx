import { SparklesText } from "@/components/ui/sparkles-text"

export function SparklesTextDemo() {
  return <SparklesText text="Magic UI" />;
}


import Switch from "@/components/ui/sky-toggle";

export default function DemoOne() {
  return <Switch />;
}


export function InteractiveHoverButtonDemo() {
  return (
    <div className="relative justify-center">
      <InteractiveHoverButton />
    </div>
  );
}