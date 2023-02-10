import { ChevronRight } from "lucide-react";

export function BreadCrumb() {
  return (
    <div className="flex">
      <span className="w-7 h-7 bg-lime-700 rounded-md flex justify-center items-center text-white">
        V
      </span>
      <div className="text-lime-400 font-bold text-sm flex items-center ml-2 gap-1">
        <span>Vinícius's organization</span>
        <ChevronRight size={20} className="text-slate-500" />
        <span>Example project</span>
        <ChevronRight size={20} className="text-slate-500" />
        <span className="text-slate-400 font-normal">Secrets</span>
      </div>
    </div>
  );
}
