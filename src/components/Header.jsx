"use client";

import React from "react";

import Link from "next/link";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { UserCircle2, Search } from "lucide-react";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const isScrolled = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });

    return () => window.removeEventListener("scroll", isScrolled);
  }, []);

  return (
    <header className="sticky bg-white top-0 z-40">
      <div
        className={`h-[85px] transition-all duration-300 ${
          scroll ? "py-1.5 shadow-xl" : "py-3"
        }`}
      >
        <div className="container mx-auto">
          <div className={`flex justify-between items-center`}>
            <HeaderLogo />
            <Nav
              containerStyles="hidden lg:flex items-center gap-5"
              linkStyles="text-lg font-medium"
            />
            <div className="flex items-center gap-5">
              <Link href="/">
                <Button className="p-1.5 rounded-full" variants="primary">
                  <UserCircle2 size={30} />
                </Button>
              </Link>
              <div className="lg:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`hidden lg:flex w-full absolute bg-primary py-8 transition-all duration-500 ${
          scroll ? "-top-[9999px] py-4" : "top-[85px]"
        }`}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl flex items-center gap-5 mx-auto">
            <Input
              className="font-medium rounded-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              type="text"
              placeholder="جستجو کنید..."
            />
            <Button className="text-secondary-foreground bg-secondary py-2.5 px-2.5 border-[1.5px] border-solid border-primary rounded-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] hover:text-secondary hover:border-secondary">
              <Search size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
