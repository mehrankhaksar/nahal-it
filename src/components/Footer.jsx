import Link from "next/link";
import Image from "next/image";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { Mail } from "lucide-react";

const footerLinks = [
  {
    pathname: "/",
    label: "خانه",
  },
  {
    pathname: "/categories",
    label: "دسته بندی محصولات",
  },
  {
    pathname: "/blog",
    label: "بلاگ",
  },
  {
    pathname: "/about-us",
    label: "درباره ما",
  },
  {
    pathname: "/contact-us",
    label: "تماس با ما",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Link className="w-fit bg-white mx-auto p-16 rounded-xl" href="/">
            <Image
              src="/assets/images/logo.png"
              width={250}
              height={250}
              priority
              alt="Logo"
            />
          </Link>
          <div className="space-y-2.5 divide-y divide-[#515E64]">
            <h3 className="h3 text-center">دسترسی سریع</h3>
            <div className="flex flex-col divide-y divide-[#515E64]">
              {footerLinks.map((item, index) => (
                <Link
                  className="text-sm font-bold py-1.5"
                  href={item.pathname}
                  key={index}
                >
                  {item.label}
                </Link>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
