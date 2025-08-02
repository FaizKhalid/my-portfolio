import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cnn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
