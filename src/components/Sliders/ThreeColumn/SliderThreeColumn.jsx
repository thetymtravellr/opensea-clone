import { useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper } from 'swiper/react';
import { SliderNavigationNext, SliderNavigationPrev } from "../components/SliderWidgets";
import { Slider, SliderWrapper } from "./style";
export default function SliderThreeColumn({ children }) {
  const [swiper,setSwiper] = useState();
  
  return (
    <SliderWrapper>
      <SliderNavigationPrev onClick={() => Swiper.slidePrev()}/>
      <Slider
        as={Swiper}
        spaceBetween={10}
        slidesPerView="auto"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSwiper={(swiper) => setSwiper(swiper)}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          2000: {
            slidesPerView: 3,
          },
        }}
      >
        {children}
      </Slider>
      <SliderNavigationNext next={true}  onClick={() => swiper.slideNext()}/>
    </SliderWrapper>
  )
}