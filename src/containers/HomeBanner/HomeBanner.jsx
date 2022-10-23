import { Container } from "@mui/material";
import { SwiperSlide } from 'swiper/react';
import ProductCard from "../../components/Cards/Product";
import SliderFourColumn from "../../components/Sliders/FourColumn/SliderFourColumn";
import { HomeBannerStyle, HomeBannerTitle } from "./style";
const HomeBanner = () =>{
    
    return(
        <HomeBannerStyle background={{default:"/images/home-banner-gradient.png",sm:"/images/home-banner-gradient-sm.png"}}>
            <Container>
                <HomeBannerTitle variant="2xl" pb="58px" as="h1">Explore, collect, and sell NFTs </HomeBannerTitle>  
                  <SliderFourColumn>
                    <SwiperSlide>
                          <ProductCard href="collection-details" image={"/images/product-image.png"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard href="collection-details" image={"/images/product-image-2.webp"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard href="collection-details" image={"/images/product-image-3.avif"} title="Neko Nation by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                      <SwiperSlide>
                      <ProductCard href="collection-details" image={"/images/product-image-4.avif"} title="CITY BLOCKS by COOPER RAY" text="Floor: 0.69 ETH"/>
                      </SwiperSlide>
                  </SliderFourColumn>
            </Container>
        </HomeBannerStyle>
    )
}

export default HomeBanner