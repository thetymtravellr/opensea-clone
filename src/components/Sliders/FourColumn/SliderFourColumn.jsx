import { useRef, useState } from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper } from 'swiper/react';
import { SliderNavigationNext, SliderNavigationPrev } from "../components/SliderWidgets";
import { Slider, SliderWrapper } from "./style";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function SliderFourColumn({ children }) {
  const [swiper,setSwiper] = useState();
  return (
    <SliderWrapper>
      <SliderNavigationPrev onClick={() => swiper.slidePrev()}/>
      <Slider
        as={Swiper}
        spaceBetween={15}
        slidesPerView="auto"
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSwiper={(swiper) => setSwiper(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          2000: {
            slidesPerView: 5,
          },
        }}
      >
        {children}
      </Slider>
      <SliderNavigationNext next={true}  onClick={() => swiper.slideNext()}/>
    </SliderWrapper>
  )
}