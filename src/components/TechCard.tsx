import React from "react";
export interface TechItem {
  id: string;
  name: string;
  logo: string;
  badge?: string;
  category: string;
  level: string;
  rating: string;
  description: string;
}

interface TechCardProps {
  tech: TechItem;
  onAddToStack: (tech: TechItem) => void;
  isAdded: boolean;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-500",
  Versatile: "bg-emerald-50 text-emerald-500",
  Fast: "bg-amber-50 text-amber-600",
  Standard: "bg-emerald-50 text-emerald-500",
  "Top SQL": "bg-indigo-50 text-indigo-500",
};

const TechCard: React.FC<TechCardProps> = ({ tech, onAddToStack, isAdded }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-slate-100 p-6 shadow-xs hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src={tech.logo}
              alt={tech.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {tech.badge && (
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[tech.badge] || "bg-slate-100 text-slate-600"}`}
            >
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">{tech.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-15">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs mb-4">
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md font-medium">
              {tech.category}
            </span>
            <span className="text-slate-400 font-medium">{tech.level}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors ${
            isAdded
              ? "text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none cursor-default"
              : "text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none"
          }`}
        >
          {isAdded ? " Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
