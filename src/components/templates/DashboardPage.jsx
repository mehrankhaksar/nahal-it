import { dahboardUsersList } from "@/constants/list";
import { Separator } from "../ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { PenSquare, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";

const DashboardPage = () => {
  return (
    <section>
      <div>
        <h2 className="h2">داشبورد</h2>
        <Separator className="bg-[#515E64] mt-2.5 mb-5" />
        <Table>
          <TableHeader className="bg-primary-foreground">
            <TableRow className="text-xl">
              <TableHead className="font-extrabold">ردیف</TableHead>
              <TableHead className="font-extrabold text-right">
                نام کاربری
              </TableHead>
              <TableHead className="font-extrabold text-right">ایمیل</TableHead>
              <TableHead className="font-extrabold text-right">وضعیت</TableHead>
              <TableHead className="font-extrabold text-right">مقام</TableHead>
              <TableHead className="font-extrabold text-right">پسورد</TableHead>
              <TableHead className="font-extrabold text-right">
                تنظیمات
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-secondary-foreground bg-primary-foreground">
            {dahboardUsersList.map((item) => (
              <TableRow className="text-base" key={item.id}>
                <TableCell className="text-2xl font-extrabold text-center">
                  {item.id}
                </TableCell>
                <TableCell className="font-bold">{item.username}</TableCell>
                <TableCell className="font-bold">{item.email}</TableCell>
                <TableCell>
                  <Badge
                    className={` w-16 font-bold text-primary-foreground py-1.5 rounded-sm ${
                      item.status ? "bg-primary" : "bg-destructive"
                    }`}
                  >
                    {item.status ? "فعال" : " غیر فعال"}
                  </Badge>
                </TableCell>
                <TableCell className="font-bold">{item.role}</TableCell>
                <TableCell className="font-bold">{item.password}</TableCell>
                <TableCell className="flex items-center">
                  <Button
                    variant="destructive"
                    className="w-full h-fit py-2.5 rounded-l-none"
                    type="button"
                  >
                    <Trash2 size={16} />
                  </Button>
                  <Button
                    className="w-full h-fit bg-[#FFCB05] py-2.5 rounded-r-none hover:bg-[#FFCB05]/80"
                    type="button"
                  >
                    <PenSquare size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default DashboardPage;
