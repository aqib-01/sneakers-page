import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

const LightBox = () => {
  const { imgs, imgsThumb, closeLightBox } = useContext(AppContext);
  const pagination = {
    clickable: true,
    el: ".img-lightbox-pagination",
    renderBullet: function (index, className) {
      return `<button class="${className} rounded-md overflow-hidden"> <img  src=${imgsThumb[index]} >   </img> </button>`;
    },
  };
  return (
    <section className="lightbox-container flex items-center pt-5">
      <div className="w-4/5 mx-auto max-w-sm relative">
        <button
          onClick={closeLightBox}
          className="absolute z-50 -top-5 right-0"
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              className="hover:fill-orange"
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <Swiper
          navigation={true}
          pagination={pagination}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {imgs.map((img, i) => (
            <SwiperSlide key={i} className="rounded-md">
              <img className="w-full" src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="img-lightbox-pagination flex items-center mt-2 gap-4"></div>
      </div>
    </section>
  );
};

export default LightBox;
