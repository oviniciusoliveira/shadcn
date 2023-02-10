import { Layers, Plus } from "lucide-react";
import { TableInput } from "./ui/TableInput";

type TableItem = {
  key: string;
  value: string;
  isOverwritten: boolean;
};

const tableData: TableItem[] = [
  {
    key: "DB_URL",
    value: "mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@mongodb.net",
    isOverwritten: false,
  },
  {
    key: "DB_PASSWORD",
    value: "example_password",
    isOverwritten: true,
  },
  {
    key: "DB_USERNAME",
    value: "user1234",
    isOverwritten: true,
  },
  {
    key: "JWT_LIFETIME",
    value: "300",
    isOverwritten: false,
  },
  {
    key: "TWILIO_AUTH_TOKEN",
    value: "example_twillio_token",
    isOverwritten: false,
  },
  {
    key: "WEBSITE_URL",
    value: "http://localhost:3000",
    isOverwritten: false,
  },
];

export function SecretsTable() {
  return (
    <div>
      <table className="table-auto w-full bg-slate-800 text-slate-400 border-b-[1px] border-slate-600">
        <thead className="border-b-[1px] border-slate-600">
          <tr>
            <th className="py-5"></th>
            <th className="border-slate-600 border-r-[1px] text-left px-4 pl-8">
              Key
            </th>
            <th className="border-slate-600 border-r-[1px] text-left px-4">
              Value
            </th>
            <th className="border-slate-600 border-r-[1px] text-left px-4">
              Comment
            </th>
            <th className="text-left px-4">Tags</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {tableData.map((item, index) => (
            <tr className="border-slate-600 border-b-[1px]">
              <td className="py-1 px-4 w-1">{index + 1}</td>
              <td className="py-1 px-4 w-1 border-slate-600 border-r-[1px]">
                <div className="flex justify-between gap-2">
                  <span>{item.key}</span>
                  {item.isOverwritten && (
                    <Layers size={20} className="text-lime-400" />
                  )}
                </div>
              </td>
              <td className="py-1 px-4 border-slate-600 border-r-[1px]">
                <TableInput value={hidePassword(item.value)} />
              </td>
              <td className="py-1 px-4 border-slate-600 border-r-[1px]">-</td>
              <td className="py-1 px-4">
                <div className="w-5 h-5 flex items-center justify-center bg-slate-700 rounded-sm cursor-pointer hover:bg-slate-600">
                  <Plus size={18} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex py-2 text-sm px-8 border-b-[1px] border-b-slate-600 bg-slate-800 items-center gap-2 text-slate-400 cursor-pointer hover:bg-slate-700 transition ease-in-out ">
        <Plus size={20} />
        Add Secret
      </div>
    </div>
  );
}

function hidePassword(password: string): string {
  let hiddedPassword = "";
  Array.from(password).forEach((v) => (hiddedPassword += "●"));
  return hiddedPassword;
}
