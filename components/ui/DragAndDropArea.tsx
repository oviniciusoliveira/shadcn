import { Upload } from "lucide-react";

export function DragAndDropArea() {
  return (
    <div className="text-slate-500 flex gap-4 items-center justify-center bg-slate-800 h-24 border-dashed border-[1px] border-slate-600 rounded-md">
      <Upload size={30} />
      <span>Drag and drop a .env or .yml file here to add more secrets</span>
    </div>
  );
}
