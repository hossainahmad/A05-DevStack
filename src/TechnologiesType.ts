import type { TechItem } from "./components/TechCard";

let techPromise: Promise<TechItem[]> | null = null;

export function getTechnologies(): Promise<TechItem[]> {
  if (!techPromise) {
    techPromise = fetch("/technologies.json").then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch technologies");
      }
      return res.json();
    });
  }
  return techPromise;
}
