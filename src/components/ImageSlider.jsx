import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

export default function ImageSlider() {
  const { imgs, imgsThumb, openLightBox } = useContext(AppContext);
  const pagination = {
    clickable: true,
    el: ".img-thumb-pagination",
    renderBullet: function (index, className) {
      return `<button class="${className} rounded-md overflow-hidden"> <img  src=${imgsThumb[index]} >   </img> </button>`;
    },
  };
  return (
    <section className="slide-container mt-3">
      <Swiper onClick={openLightBox}
        navigation={true}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        className="mySwiper lg:cursor-pointer"
      >
        {imgs.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="img-thumb-pagination hidden lg:visible lg:flex items-center mt-4 gap-4"></div>
    </section>
  );
}
