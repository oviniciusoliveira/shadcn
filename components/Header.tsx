import { Book, ChevronDown, HelpCircle, LogOut, Settings } from "lucide-react";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";

export function Header() {
  return (
    <div className="bg-slate-800 w-full h-14 border-b-slate-600 border-b-[1px] flex items-center px-4 justify-between">
      <div className="flex gap-4 items-center">
        <img className="w-9 h-9 rounded-md" src="/aircloud.png" />
        <span className="text-2xl font-bold text-white">Aircloud</span>
      </div>
      <div className="flex gap-6">
        <Button className="bg-transparent flex gap-2 hover:bg-slate-700 p-2">
          <Book size={20} />
          <span>Docs</span>
        </Button>
        <Button className="bg-transparent flex gap-2 hover:bg-slate-700 p-2">
          <HelpCircle size={20} />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="data-[state=open]:bg-transparent"
          >
            <Button className="bg-transparent  flex gap-2 hover:bg-slate-700 p-2">
              <span>Vinícius Oliveira</span>
              <ChevronDown size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-700 border-none">
            <DropdownMenuLabel className="uppercase text-slate-400">
              Signed in As
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:bg-slate-600 cursor-pointer text-slate-300">
                <div className="flex gap-2 items-center">
                  <span className="w-8 h-8 rounded-md flex justify-center items-center bg-slate-800">
                    V
                  </span>
                  <div className="flex flex-col">
                    <span>Vinícius Oliveira</span>
                    <span className="text-xs text-slate-400">
                      viniciuso.contato@gmail.com
                    </span>
                  </div>
                  <Settings
                    size={20}
                    className="hover:bg-slate-500 p-1 h-7 w-7 rounded-md"
                  />
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-slate-500" />
            <DropdownMenuItem className="hover:bg-red-400 hover:text-white transition ease-in-out rounded-md cursor-pointer text-slate-300">
              <div className="flex gap-2 items-center p-2 ">
                <LogOut size={20} />
                <span>Log Out</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
