import React from "react";

interface MyButtonProps {
  children: React.ReactNode;
}

export default function MyButton({ children }: MyButtonProps) {
  return (
    <button style={{ backgroundColor: "lightblue", padding: "10px" }}>
      {children}
    </button>
  );
}
