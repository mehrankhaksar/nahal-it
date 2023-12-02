import React from "react";

import { ArrowRight, ArrowLeft } from "lucide-react";

import { cooperationsSlides } from "@/constants/list";

import Slider from "./modules/Slider";

const Cooperations = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="space-y-10">
          <h1 className="section-title">همکاری</h1>
          <h2 className="h2 text-center">
            مجموعه نهال آی تی افتخار همکاری با :
          </h2>
          <Slider
            swiperStyles="w-full h-[250px]"
            navigationContainerStyles="flex items-center bg-primary px-2.5 rounded-md"
            navigationStyles="w-fit h-fit text-primary bg-secondary p-1.5 border-2 border-solid border-transparent rounded-full hover:text-secondary hover:border-secondary"
            navigationIcons={[<ArrowRight />, <ArrowLeft />]}
            slides={cooperationsSlides}
            slideStyles="bg-[#D9D9D9] rounded-2xl"
            slideLinkStyles="w-[100px] h-[100px] inline-block relative top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 85,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Cooperations;
