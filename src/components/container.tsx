import React from "react";
import { cnn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // ← optional className
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cnn(
        "mx-auto w-full max-w-4xl bg-white dark:bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
