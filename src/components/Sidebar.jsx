import React from "react";

import Link from "next/link";

import { sidebarLinks } from "@/constants/list";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <aside className="w-[300px] h-[330px] flex flex-col justify-between text-primary-foreground bg-primary p-5 rounded-2xl">
      <div className="font-bold">
        {sidebarLinks.map((item, index) => (
          <React.Fragment key={index}>
            <Link href={item.pathname}>{item.label}</Link>
            {sidebarLinks.length !== index + 1 && (
              <Separator className="my-2.5" />
            )}
          </React.Fragment>
        ))}
      </div>
      <Button
        className="w-full text-base font-bold bg-[#FFC107] hover:bg-[#FFC107]/80"
        type="button"
      >
        خروج
      </Button>
    </aside>
  );
};

export default Sidebar;
