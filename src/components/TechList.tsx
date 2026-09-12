import { use } from "react";
import TechCard from "./TechCard";
import type { TechItem } from "./TechCard";

export interface TechListProps {
  technologiesPromise: Promise<TechItem[]>;
  selectedStack: TechItem[];
  onAddToStack: (tech: TechItem) => void;
}

export default function TechList({
  technologiesPromise,
  selectedStack,
  onAddToStack,
}: TechListProps) {
  // use() suspends this component until the promise resolves
  const techData = use(technologiesPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techData.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          onAddToStack={onAddToStack}
          isAdded={selectedStack.some((item) => item.id === tech.id)}
        />
      ))}
    </div>
  );
}
