import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { AlignJustify } from "lucide-react";

import { Search } from "lucide-react";

import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center gap-10 mt-8">
          <div className="w-full h-[60px] relative">
            <Input
              className="h-full"
              type="email"
              placeholder="جستجو کنید..."
            />
            <Button className="absolute top-1/2 left-2.5 -translate-y-1/2 py-2.5 px-2.5 rounded-full">
              <Search size={20} />
            </Button>
          </div>
          <HeaderLogo />
          <Nav
            containerStyles="flex flex-col items-center gap-5"
            linkStyles="text-lg font-bold"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
