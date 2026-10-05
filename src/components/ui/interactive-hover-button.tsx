import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({
  text           = "Button",
  hoverBgColor   = "bg-[#7c8f7a]",
  hoverTextColor = "text-white",
  className,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full",
        "border p-2 text-center font-semibold transition-colors",
        className,
      )}
      {...props}
    >
      {/* Default label — slides out right on hover */}
      <span className="relative z-10 inline-block translate-x-3 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 whitespace-nowrap">
        {text}
      </span>

      {/* Hover label + arrow — slides in from right on hover */}
      <div className={cn(
        "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center",
        "justify-center gap-2 opacity-0 transition-all duration-300",
        "group-hover:-translate-x-1 group-hover:opacity-100 whitespace-nowrap px-3",
        hoverTextColor,
      )}>
        <span>{text}</span>
        <ArrowRight size={16} />
      </div>

      {/* Expanding blob — the fill effect */}
      <div className={cn(
        "absolute left-4 top-[calc(50%-4px)] h-2 w-2 scale-[1] rounded-full",
        "transition-all duration-300",
        "group-hover:left-[0%] group-hover:top-[0%]",
        "group-hover:h-full group-hover:w-full group-hover:scale-[1.8]",
        hoverBgColor,
      )} />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
export { InteractiveHoverButton };
