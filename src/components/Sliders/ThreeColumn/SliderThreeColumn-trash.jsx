import { useState } from "react";
import { useRef } from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, useSwiper } from 'swiper/react';
import { SliderNavigationNext, SliderNavigationPrev } from "../components/SliderWidgets";
import { Slider, SliderWrapper } from "./style";
export default function SliderThreeColumn({ children }) {
  // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
  const [swiper,setSwiper] = useState();
  // const prevRef = useRef(null)
  // const nextRef = useRef(null)
  // const swiper = useSwiper();
  
  return (
    <SliderWrapper>
      <SliderNavigationPrev onClick={() => swiper.slidePrev()}/>
      {/* <SliderNavigationPrev ref={prevRef} onClick={() => swiper.slidePrev()}/> */}
      <Slider
        as={Swiper}
        spaceBetween={10}
        slidesPerView="auto"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // navigation
        // navigation={{
        //   // Both prevEl & nextEl are null at render so this does not work
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current,
        // }}
        // onBeforeInit={swiper => {
        //   swiper.params.navigation.prevEl = prevRef.current
        //   swiper.params.navigation.nextEl = nextRef.current
        //   swiper.navigation.destroy()
        //   swiper.navigation.init()
        //   swiper.navigation.update()
        // }}
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
      {/* <SliderNavigationNext next={true} ref={nextRef}  onClick={() => swiper.slideNext()}/> */}
    </SliderWrapper>
  )
}