import { RiFirefoxLine, RiInstagramLine, RiVolumeUpLine } from "react-icons/ri";

import ServiceCard from "./modules/ServiceCard";
import Products from "./Products";
import ItemsList from "./modules/ItemsList";
import { products } from "@/constants/list";
import { Badge } from "./ui/badge";

const services = [
  {
    icon: <RiFirefoxLine size={60} />,
    title: "فروش سایت اختصاصی و اقتصادی",
    description:
      "در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی ، آماده به فروش می باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.",
  },
  {
    icon: <RiInstagramLine size={60} />,
    title: "فروش سایت اختصاصی و اقتصادی",
    description:
      "در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی ، آماده به فروش می باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.",
  },
  {
    icon: <RiVolumeUpLine size={60} />,
    title: "فروش سایت اختصاصی و اقتصادی",
    description:
      "در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی ، آماده به فروش می باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.",
  },
];

const Services = () => {
  return (
    <section className="relative mb-20">
      <div className="container mx-auto">
        <div className="space-y-10">
          <h2 className="section-title">خدمات نهال آی‌تی</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {services.map((item, index) => (
              <ServiceCard {...item} key={index} />
            ))}
          </div>
          <div className="relative bg-primary py-5 px-10 rounded-2xl">
            <Badge
              className="w-14 h-14 absolute -top-5 -left-5 text-lg font-extrabold -rotate-45 z-10"
              variant="destructive"
            >
              50%
            </Badge>
            <ItemsList
              type="products"
              list={products}
              containerStyles="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
              itemStyles="group bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
