"use client";

import { ProjectInterface } from "@/db";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "../cards";

export function Slider({ data }: { data: ProjectInterface[] }) {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      slidesPerView={3}
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
      autoplay
      navigation
      scrollbar={{ draggable: true }}
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
