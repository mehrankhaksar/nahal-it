"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import { headerLinks } from "@/constants/list";

const activeLinkVariants = {};

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
