
import { Grid } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCardMedia from "~components/Cards/Blog/Media/BlogCardMedia";
import PaginationCustom from "~components/Pagination";
import BlogPosts from "~containers/Blogposts";
import Container from "~containers/Layouts/Container";
import BlogSectionStyled from "./style";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function BlogSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  
  return(
    <BlogSectionStyled>
      <Container className="container">
        <BlogSectionStyled.SliderBlock>
          <Grid container justifyContent={"center"}>
            <Grid item  md={12} xs={10} xxs={12}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                  clickable:true
                }}
                modules={[Pagination]}
              >
                <SwiperSlide><BlogCardMedia image={"https://blogmigration.kinsta.cloud/wp-content/uploads/2022/07/01Solana-BlogHeader.jpg"}/></SwiperSlide>
                <SwiperSlide><BlogCardMedia image={"https://blogmigration.kinsta.cloud/wp-content/uploads/2022/06/TS_Hidden-copy-2048x1365.jpg"}/></SwiperSlide>
                <SwiperSlide><BlogCardMedia/></SwiperSlide>
                <SwiperSlide><BlogCardMedia/></SwiperSlide>
              </Swiper>
            </Grid>
          </Grid>
        </BlogSectionStyled.SliderBlock>
        <BlogPosts/>
        <PaginationCustom count={10}  className="blog-pagination" />
      </Container>
    </BlogSectionStyled>
  )
}