"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

const activeLinkVariants = {};

const headerLinks = [
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
];

const Nav = ({ containerStyles, linkStyles, activeLinkStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={containerStyles}>
      {headerLinks.map((item, index) => (
        <Link className={linkStyles} href={item.pathname} key={index}>
          {/* {item.pathname === pathname && (
            <motion.span
              className={activeLinkStyles}
              variants={activeLinkVariants}
              initial="initial"
              animate="animate"
              layoutId="active-link"
            />
          )} */}
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
