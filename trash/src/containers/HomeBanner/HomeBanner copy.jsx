import { Container, Typography } from "@mui/material"
import { HomeBannerStyle, HomeBannerTitle, Slider, SliderWrapper } from "./style"
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from "../../components/Cards/Product";
import { useEffect, useRef, useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronLeft';
const HomeBanner = () =>{
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();
    useEffect(() => {
      console.log("Swiper parent:", Boolean(swiper));
      if (Boolean(swiper)) {
        // console.log("Swiper:", Boolean(swiper?.params?.navigation?.prevEl));
        // console.log("Swiper instance:", swiper?.params?.navigation?.prevEl);
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
      }, [swiper])
    return(
        <HomeBannerStyle background={{default:"/images/home-banner-gradient.png",sm:"/images/home-banner-gradient-sm.png"}}>
            <Container>
                <HomeBannerTitle variant="2xl" pb="58px" as="h1">Explore, collect, and sell NFTs </HomeBannerTitle>
                
                <SliderWrapper>
                  <div className="swiper-navigation-left" ref={prevRef}>
                    <ChevronLeftIcon/>
                  </div>
                  <Slider
                      modules={[Navigation]}
                      as={Swiper}
                      lazy={true}
                      spaceBetween={15}
                      slidesPerView="auto"
                      updateOnWindowResize
                      observer
                      observeParents
                      navigation={{
                        prevEl: prevRef?.current,
                        nextEl: nextRef?.current
                      }}
                      loop={true}
                      onSwiper={setSwiper}
                      breakpoints={{
                          320:{
                              slidesPerView: 1,
                          },
                          420:{
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
                      <SwiperSlide>
                          <ProductCard image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                  </Slider>
                  <div className="swiper-navigation-right" ref={nextRef}>
                    <ChevronRightIcon/>
                  </div>
                </SliderWrapper>
            </Container>
        </HomeBannerStyle>
    )
}

export default HomeBanner