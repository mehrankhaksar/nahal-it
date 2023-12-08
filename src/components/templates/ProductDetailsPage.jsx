import Image from "next/image";

import { Button } from "../ui/button";

const ProductDetailsPage = ({
  image,
  title,
  description,
  updatedAt,
  createdAt,
  salesNumber,
  visitsNumber,
  price,
}) => {
  return (
    <section className="my-10 md:mt-40">
      <div className="container mx-auto">
        <div className="space-y-16">
          <div className="flex gap-10">
            <div className="min-w-[400px] h-[400px] relative rounded-[30px] overflow-hidden">
              <Image src={image} fill priority alt={title} />
            </div>
            <div className="space-y-5">
              <h2 className="h2">{title}</h2>
              <p className="description font-medium lg:text-lg">
                {description}
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full space-y-5 text-primary-foreground bg-primary py-5 px-10 rounded-xl">
              <h4 className="h4">مشخصات</h4>
              <ul className="grid grid-cols-2 gap-5 text-lg font-medium">
                <li className="flex items-center gap-1.5">
                  نام محصول:
                  <span className="font-semibold">{title}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  آخرین بروزرسانی:
                  <span className="font-semibold">{updatedAt}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  تاریخ انتشار:
                  <span className="font-semibold">{createdAt}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  پشتیبانی:
                  <span className="font-semibold">24 ساعت پس از خرید</span>
                </li>
                <li className="flex items-center gap-1.5">
                  تعداد فروش:
                  <span className="font-semibold">{salesNumber}</span>
                </li>
                <li className="col-start-1 flex items-center gap-1.5">
                  تعداد بازدید:
                  <span className="font-semibold">{visitsNumber}</span>
                </li>
              </ul>
            </div>
            <div className="min-w-[325px] h-[285px] flex flex-col justify-between text-primary-foreground bg-primary py-5 pb-3.5 px-2 rounded-xl">
              <div className="flex justify-center items-center gap-1 text-2xl font-semibold">
                <span className="font-extrabold">{price}</span>
                تومان
              </div>
              <div className="flex flex-col gap-2.5">
                <Button className="w-full bg-[#FFC107] text-base font-bold rounded-lg hover:bg-[#FFC107]/80">
                  پیش نمایش
                </Button>
                <Button className="w-full bg-[#0D6EFD] text-base font-bold rounded-lg hover:bg-[#0D6EFD]/80">
                  خرید
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
