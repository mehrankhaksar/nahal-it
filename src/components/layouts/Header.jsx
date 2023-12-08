"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { UserCircle2, Search } from "lucide-react";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const isScrolled = window.addEventListener("scroll", () => {
      window.scrollY > 25 ? setScroll(true) : setScroll(false);
    });

    return () => window.removeEventListener("scroll", isScrolled);
  }, []);

  const pathname = usePathname();

  return (
    <header
      className={`flex items-center sticky top-0 bg-white z-40 transition-all duration-300 ${
        pathname === "/dashboard" && "hidden"
      } ${scroll ? "h-[85px] shadow-xl" : "h-[100px]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
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
      <div
        className={`hidden w-full absolute bg-primary py-8 transition-all duration-500 lg:flex ${
          scroll ? "-top-[9999px] py-4" : "top-[100px]"
        }`}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl flex items-center gap-5 mx-auto">
            <Input
              className="font-medium rounded-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              type="text"
              placeholder="جستجو کنید..."
            />
            <Button
              className="text-secondary-foreground bg-secondary py-2.5 px-2.5 border-2 border-solid border-primary rounded-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] hover:text-secondary hover:border-secondary"
              type="button"
            >
              <Search size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
