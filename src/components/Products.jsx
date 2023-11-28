import { Button } from "./ui/button";

import { ArrowLeft } from "lucide-react";

import { products } from "@/constants/list";

import ProductCard from "./modules/ProductCard";
import ItemsList from "./modules/ItemsList";

const Products = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="section-title">جدید ترین محصولات</h2>
            <Button className="h-fit py-2.5 px-2.5 rounded-full">
              <div className="bg-white py-1.5 px-1.5 rounded-full">
                <ArrowLeft className="text-primary" size={20} />
              </div>
            </Button>
          </div>
          <ItemsList
            type="products"
            list={products}
            containerStyles="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
            itemStyles="bg-gradient-to-tl from-[#6ECB63] via-green-100 to-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
