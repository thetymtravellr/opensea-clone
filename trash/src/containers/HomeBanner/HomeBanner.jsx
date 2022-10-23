import { Container, Typography } from "@mui/material"
import { HomeBannerStyle, HomeBannerTitle, Slider, SliderWrapper } from "./style"
import { SwiperSlide } from 'swiper/react';
import ProductCard from "../../components/Cards/Product";
import SliderFourColumn from "../../components/Sliders/FourColumn/SliderFourColumn";
const HomeBanner = () =>{
    
    return(
        <HomeBannerStyle background={{default:"/images/home-banner-gradient.png",sm:"/images/home-banner-gradient-sm.png"}}>
            <Container>
                <HomeBannerTitle  pb="58px">Explore, collect, and sell NFTs </HomeBannerTitle>  
                  <SliderFourColumn>
                    <SwiperSlide>
                          <ProductCard image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard image={"/images/product-image-2.webp"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                  </SliderFourColumn>
            </Container>
        </HomeBannerStyle>
    )
}

export default HomeBanner