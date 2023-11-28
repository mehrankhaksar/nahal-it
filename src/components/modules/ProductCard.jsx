import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

const ProductCard = ({
  image,
  title,
  description,
  capabilities,
  date,
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
          <p className="description font-normal">{description}</p>
        </div>
        <ul className="group-[]:hidden divide-y divide-black">
          {capabilities.map((item, index) => (
            <li className="py-2.5" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <Button className="w-full font-bold bg-[#515E64] rounded-xl hover:bg-[#515E64]/80">
          <Link href="/">اطلاعات بیشتر</Link>
        </Button>
        <div className="group-[]:hidden">تاریخ تولید: {date}</div>
      </div>
    </div>
  );
};

export default ProductCard;
