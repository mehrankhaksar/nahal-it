"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import SliderNavigation from "./SliderNavigation";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({
  swiperStyles,
  navigationContainerStyles,
  rightNavigationContainerStyles,
  leftNavigationContainerStyles,
  navigationStyles,
  navigationIcons,
  slides,
  breakpoints,
  slideStyles,
  slideLinkStyles,
}) => {
  const swiperRef = React.useRef(null);

  const handlePrev = React.useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="flex gap-5 relative sm:gap-10">
      <div
        className={`${navigationContainerStyles} ${rightNavigationContainerStyles}`}
      >
        <SliderNavigation
          navigationStyles={navigationStyles}
          onClick={handlePrev}
        >
          {navigationIcons[0]}
        </SliderNavigation>
      </div>
      <Swiper
        className={swiperStyles}
        ref={swiperRef}
        breakpoints={breakpoints}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
      >
        {slides.map((item, index) => (
          <SwiperSlide className={slideStyles} virtualIndex={index} key={index}>
            <Link className={slideLinkStyles} href={item.pathname}>
              <Image
                className="object-contain"
                src={item.image}
                fill
                priority
                alt="Slide"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${navigationContainerStyles} ${leftNavigationContainerStyles}`}
      >
        <SliderNavigation
          navigationStyles={navigationStyles}
          onClick={handleNext}
        >
          {navigationIcons[1]}
        </SliderNavigation>
      </div>
    </div>
  );
};

export default Slider;
