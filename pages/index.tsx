import { Header } from "@/components/Header";
import { SecretsTable } from "@/components/SecretsTable";
import { Sidebar } from "@/components/Sidebar";
import { BreadCrumb } from "@/components/ui/BreadCrumb";
import { Button } from "@/components/ui/Button";
import { DragAndDropArea } from "@/components/ui/DragAndDropArea";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Check, Download, Eye, History, Plus, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex">
        <div className="flex flex-col h-screen p-2 bg-slate-800 shadow w-80 border-r-[1px] border-r-slate-600">
          <Sidebar />
        </div>
        <div className="bg-slate-900 w-full p-4">
          <BreadCrumb />
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-bold text-3xl">Secrets</h2>
              <div className="flex gap-2">
                <Button className="bg-slate-700 text-slate-300 hover:bg-lime-500 hover:text-black flex gap-2">
                  <History size={20} />2 Commits
                </Button>
                <Button className="bg-lime-500 text-black hover:bg-lime-600 flex gap-2">
                  <Check size={20} strokeWidth={3} />
                  Save Changes
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 gap-2">
              <Select value="development">
                <SelectTrigger className="text-slate-300 font-bold max-w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="testing">Testing</SelectItem>
                    <SelectItem value="production">Production</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex w-full items-center bg-slate-700 rounded-md px-2">
                <div>
                  <Search
                    className="text-slate-400"
                    strokeWidth={3}
                    size={20}
                  />
                </div>
                <Input
                  placeholder="Search keys..."
                  className="text-slate-400"
                />
              </div>
              <Button className="bg-slate-700 text-slate-300 hover:bg-lime-500 hover:text-black flex gap-2">
                <Download size={20} />
              </Button>
              <Button className="bg-slate-700 text-slate-300 hover:bg-lime-500 hover:text-black flex gap-2">
                <Eye size={20} />
              </Button>
              <Button className="bg-slate-700 text-slate-300 hover:bg-lime-500 hover:text-black flex gap-2 whitespace-nowrap">
                <Plus size={20} />
                <span>Add Key</span>
              </Button>
            </div>
            <div className="border-[1px] border-slate-600 rounded-md mt-4">
              <div>
                <SecretsTable />
              </div>
              <div className="p-3 ">
                <DragAndDropArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
