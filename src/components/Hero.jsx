import { ChevronRight, ChevronLeft } from "lucide-react";

import { heroSlides } from "@/constants/list";

import Slider from "./modules/Slider";

const Hero = () => {
  return (
    <section className="mb-24">
      <div className="container mx-auto">
        <Slider
          swiperStyles="w-full h-[400px] rounded-3xl"
          navigationContainerStyles="absolute top-1/2 -translate-y-1/2 z-10"
          rightNavigationContainerStyles="right-0"
          leftNavigationContainerStyles="left-0"
          navigationStyles="w-fit h-fit text-primary bg-transparent transition-transform hover:bg-transparent hover:scale-125"
          navigationIcons={[
            <ChevronRight size={50} />,
            <ChevronLeft size={50} />,
          ]}
          slides={heroSlides}
          pagination={{ clickable: true }}
        />
      </div>
    </section>
  );
};

export default Hero;
