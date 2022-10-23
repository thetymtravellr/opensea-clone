import { Container, Grid } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { SectionStyled } from "./style";
import SliderThreeColumn from "../../components/Sliders/ThreeColumn";
import ProfileCard from "../../components/Cards/Profile/ProfileCard";
import CategoryCard from "../../components/Cards/Category/CategoryCard";
export default function Spotlight(){
  return(
    <SectionStyled>
      <Container>
          <SectionStyled.Title variant="lg" mb="40px" as="h2" >
          Sports spotlight
          </SectionStyled.Title>
          <Grid container spacing={2}>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard/>
            </Grid>
          </Grid>
      </Container>
    </SectionStyled>
  )
}