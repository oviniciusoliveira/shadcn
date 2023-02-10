import { FileText, Key, Settings, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import { SidebarItem } from "./ui/SidebarItem";

export function Sidebar() {
  const iconSize = 20;

  return (
    <ul className="text-white font-sans flex flex-col gap-1">
      <div className="mx-4 flex flex-col gap-1 mt-4">
        <span className="uppercase font-bold text-sm text-slate-400">
          Project
        </span>
        <Select value="example">
          <SelectTrigger className="mb-10">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="example">Example Project</SelectItem>
              <SelectItem value="project1">Project 1</SelectItem>
              <SelectItem value="project2">Project 2</SelectItem>
              <SelectItem value="project3">Project 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <SidebarItem
        active={true}
        icon={<Key size={iconSize} />}
        label="Secrets"
      />
      <SidebarItem icon={<Users size={iconSize} />} label="Members" />
      <SidebarItem icon={<FileText size={iconSize} />} label="Activity Logs" />
      <SidebarItem icon={<Settings size={iconSize} />} label="Settings" />
    </ul>
  );
}
