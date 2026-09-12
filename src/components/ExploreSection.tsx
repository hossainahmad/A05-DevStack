import { Suspense, useState } from "react";
import TechList from "./TechList";
import YourStack from "./YourStack";
import type { TechItem } from "./TechCard";
import { getTechnologies } from "../TechnologiesType";
import { toast } from "react-toastify";

const techPromise = getTechnologies();

export default function ExploreSection() {
  const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);

  function handleAddToStack(tech: TechItem) {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      icon: <span>🚀</span>,
    });
  }

  function handleRemoveFromStack(techId: string, techName: string) {
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId));
    toast.info(`Removed ${techName} from stack.`, {
      icon: <span>🗑️</span>,
    });
  }

  function handleClearAll() {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Removed all technologies from your stack.", {
      icon: <span>🧹</span>,
    });
  }

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="text-slate-500 mt-1 font-medium">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="flex justify-center items-center py-20">
                  <span className="loading loading-spinner loading-lg text-pink-400"></span>
                </div>
              }
            >
              <TechList
                technologiesPromise={techPromise}
                selectedStack={selectedStack}
                onAddToStack={handleAddToStack}
              />
            </Suspense>
          </div>

          <div className="lg:col-span-1">
            <YourStack
              selectedStack={selectedStack}
              onRemoveFromStack={handleRemoveFromStack}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
