"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper";
import { OpinionBox } from "../Box/OpinionBox";

export const ReviewsCarrousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      autoHeight
      modules={[Pagination, Autoplay, Navigation, Keyboard]}
      autoplay
      loop
      navigation
      keyboard
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="">
        <div className="flex justify-center py-4">
          <OpinionBox author="- Bloody, EdoCraft Network Owner -">
            An excellent job at the time of the product and in the time that they finished it and not to mention the
            price, super cheap for the quality and time.
          </OpinionBox>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center py-4">
          <OpinionBox author="- ​LucasInDev, ​CrowtyCraft Network Owner -">
            Excellent production, execution and review by the team that makes up KayTeam, both @Segundo S. [Executive]
            and @Osvaldo P. [Technology] are very nice and pleasant people with whom you can talk and have a quiet
            laugh. The first time we worked with such nice devs who give a very good vibe.
          </OpinionBox>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center py-4">
          <OpinionBox author="- xUges_ -">
            Good and Cheap are the words that KayTeam stands out with. @Segundo S. [Executive] and @Osvaldo P.
            [Technology] are quite professional people who can do what you asked in a few days and for a cheap price.
          </OpinionBox>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
