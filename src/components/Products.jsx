import { Button } from "./ui/button";

import { ArrowLeft } from "lucide-react";

import { products } from "@/constants/list";

import ItemsList from "./modules/ItemsList";

const Products = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="space-y-20">
          <div className="flex justify-between items-center">
            <h2 className="section-title">جدید ترین محصولات</h2>
            <Button className="w-fit h-fit text-primary py-2.5 px-2.5 rounded-full">
              <ArrowLeft
                className="bg-white py-1.5 px-1.5 rounded-full"
                size={30}
              />
            </Button>
          </div>
          <ItemsList
            type="products"
            list={products}
            containerStyles="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
            itemStyles="bg-gradient-to-tl from-[#6ECB63] via-[#6ECB63]/30 to-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
