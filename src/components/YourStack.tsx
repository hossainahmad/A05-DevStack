import React from "react";
import type { TechItem } from "./TechCard";

interface YourStackProps {
  selectedStack: TechItem[];
  onRemoveFromStack: (id: string, name: string) => void;
  onClearAll: () => void;
}

const YourStack = ({
  selectedStack,
  onRemoveFromStack,
  onClearAll,
}: YourStackProps) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs sticky top-24 self-start z-10">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      </div>

      {selectedStack.length === 0 ? (
        <>
          <p className="text-xs text-slate-400 mb-4">
            No technologies selected yet.
          </p>
          <div className="border border-dashed border-slate-200 rounded-xl p-8 text-center">
            <span className="text-slate-400 text-sm">Your stack is empty.</span>
          </div>
        </>
      ) : (
        <>
          <p className="text-xs text-slate-400 mb-4">
            {selectedStack.length}{" "}
            {selectedStack.length === 1 ? "technology" : "technologies"}{" "}
            selected
          </p>
          <div className="space-y-2">
            {selectedStack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-5 h-5 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-800 leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {item.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromStack(item.id, item.name)}
                  className="text-slate-400 hover:text-red-500 text-sm px-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={onClearAll}
            className="w-full mt-5 py-2.5 px-4 border border-rose-300 hover:bg-rose-50 rounded-xl text-rose-500 font-bold text-xs transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;
