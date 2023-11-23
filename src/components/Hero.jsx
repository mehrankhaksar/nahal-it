"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
  {
    pathname: "/",
    slide: 1,
  },
  {
    pathname: "/",
    slide: 2,
  },
  {
    pathname: "/",
    slide: 3,
  },
];

const Hero = () => {
  return (
    <section className="pt-44 pb-24">
      <div className="container mx-auto">
        <Swiper
          className="w-full h-[400px] rounded-[30px]"
          style={{
            "--swiper-navigation-size": "35px",
            "--swiper-navigation-color": "#16A34A",
            "--swiper-pagination-bullet-width": "85px",
            "--swiper-pagination-bullet-height": "5px",
            "--swiper-pagination-color": "#16A34A",
            "--swiper-pagination-bullet-border-radius": "2.5px",
          }}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {heroSlides.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.pathname}>
                <Image
                  src={`/assets/images/hero/hero-slide-${item.slide}.png`}
                  fill
                  priority
                  alt="Slide"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
