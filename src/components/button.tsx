import type React from "react";
import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "default" | "outline" | "destructive";
  className?: string;
  children: ReactNode;
}
export const Button = ({
  variant = "default",
  className = "",
  children,
  ...props
}: React.ComponentProps<"button"> & ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-4 p-2 rounded-md cursor-pointer ${className} ${
        variant == "default"
          ? "bg-cyan-500 "
          : variant == "outline"
            ? "border border-slate-800 text-slate-800"
            : "bg-red-500"
      }`}
    >
      {children}
    </button>
  );
};
