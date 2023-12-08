"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { footerLinks } from "@/constants/list";

import { Mail } from "lucide-react";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={`bg-primary py-10 ${
        (pathname === "/authentication" || pathname === "/dashboard") &&
        "hidden"
      }`}
    >
      <div className="container mx-auto">
        <div className="grid gap-8 relative md:grid-cols-3">
          <Link className="w-fit bg-white mx-auto p-16 rounded-xl" href="/">
            <Image
              className="object-contain"
              src="/assets/images/logo.png"
              width={250}
              height={250}
              priority
              alt="Logo"
            />
          </Link>
          <div className="space-y-2.5">
            <h3 className="h3 text-center">دسترسی سریع</h3>
            <Separator className="bg-[#515E64] my-3" />
            <div className="flex flex-col">
              {footerLinks.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    className="text-sm font-bold py-1.5"
                    href={item.pathname}
                  >
                    {item.label}
                  </Link>
                  {footerLinks.length !== index + 1 && (
                    <Separator className="bg-[#515E64] my-1.5" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="h-fit space-y-3 bg-secondary p-6 rounded-xl">
            <div className="flex items-center gap-1.5 text-xl font-extrabold">
              <Mail size={20} />
              <h2 className="h2">خبر نامه</h2>
            </div>
            <div className="space-y-3">
              <Input type="text" placeholder="ایمیل خود را وارد کنید..." />
              <Button className="w-full text-base font-extrabold">ارسال</Button>
            </div>
          </div>
          <div className="flex items-center gap-2.5 absolute left-0 bottom-0 text-xl text-primary-foreground">
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaTelegram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
