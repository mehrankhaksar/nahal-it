import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import TextTruncate from "./TextTruncate";

const ProductCard = ({
  id,
  image,
  title,
  description,
  capabilities,
  createdAt,
  itemStyles,
}) => {
  return (
    <div className={`rounded-xl overflow-hidden ${itemStyles}`}>
      <div className="w-full h-[250px] relative">
        <Image src={image} fill priority alt="Product" />
      </div>
      <div className="space-y-5 text-sm font-bold p-5">
        <div>
          <h3 className="h2">{title}</h3>
          <TextTruncate element="p" line={3} text={description} />
        </div>
        <ul className="group-[]:hidden">
          {capabilities.map((item, index) => (
            <React.Fragment key={index}>
              <li className="py-2.5">{item}</li>
              {capabilities.length !== index + 1 && (
                <Separator className="bg-secondary-foreground" />
              )}
            </React.Fragment>
          ))}
        </ul>
        <Separator className="group-[]:hidden bg-secondary-foreground" />
        <Link href={`/product/${id}`}>
          <Button className="w-full font-bold bg-[#515E64] rounded-xl hover:bg-[#515E64]/80">
            اطلاعات بیشتر
          </Button>
        </Link>
        <Separator className="group-[]:hidden bg-secondary-foreground" />
        <div className="group-[]:hidden text-secondary-foreground/50">
          تاریخ تولید: {createdAt}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
