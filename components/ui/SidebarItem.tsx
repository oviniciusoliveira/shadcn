import { cn } from "@/lib/utils";

type SidebarItemProps = {
  active?: boolean;
  label: string;
  icon: React.ReactElement;
};

export function SidebarItem({ active = false, label, icon }: SidebarItemProps) {
  return (
    <li
      className={cn(
        "flex gap-2 h-10 py-1 px-2 rounded-md items-center before:block before:h-full before:w-1 before:rounded-sm hover:bg-slate-700 cursor-pointer transition ease-in-out",
        {
          "before:bg-lime-300 bg-slate-700": active,
        }
      )}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </li>
  );
}
