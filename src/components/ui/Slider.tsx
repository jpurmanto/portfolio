"use client";

import { ProjectInterface } from "@/db";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "../cards";

export function Slider({ data }: { data: ProjectInterface[] }) {
  return (
    <Swiper
      modules={[
        A11y,
        Autoplay,
        Keyboard,
        Mousewheel,
        EffectCoverflow,
        Navigation,
      ]}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={50}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 44,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      keyboard={{
        enabled: true,
      }}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      navigation
      mousewheel
      loop
    >
      {data?.length
        ? data.map((item, index) => (
            <SwiperSlide key={index}>
              <ProjectCard item={item} />
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
}
