import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import ProfileCard from "../../components/Cards/Profile/ProfileCard";
import SliderThreeColumn from "../../components/Sliders/ThreeColumn";
import { SectionStyled } from "./style";
export default function LatestAndNotable(){
  return(
    <SectionStyled>
      <Container>
          <SectionStyled.Title variant="lg" mb="40px" as="h2">
            New and notable
          </SectionStyled.Title>
          <SliderThreeColumn>
              <SwiperSlide>
                <ProfileCard avatar="https://i.seadn.io/gcs/files/0303d12a13c8145fba2e809ab1c477a0.jpg?auto=format&w=256" cover="https://i.seadn.io/gae/yx8ea7HuYJ4qXcvcv99EKehCat9G-aNYEkYvUGBDvfFHyvtr_ny7pRcJ_8s0DPICuIwyEzdUx1Nbq_GJ-RAVwQyh5S-0HSDh03qD?auto=format&w=1920"/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard avatar="https://i.seadn.io/gae/LS2AweBD09u_9ZJKCg0kygkkUwUEm48vdgFNYm7SoT-GvQ9iysUUCbSz5ILDKd3SfLFstKOOmKjeWdE7_SZwVhCSggHiLLwytEGN?auto=format&w=256" cover="https://i.seadn.io/gcs/files/c73a85f6d8ebbf5ed7598c284cab7aca.png?auto=format&w=1920"/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard title="Anthony Hopkins" avatar="https://i.seadn.io/gcs/files/c00d3dd212a1b3b9a2340cb15e81a880.png?auto=format&w=256" cover="https://i.seadn.io/gcs/files/a54a001eb5a78877b6e3647896db262b.jpg?auto=format&w=1920"/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard cover=""/>
              </SwiperSlide>
          </SliderThreeColumn>
      </Container>
    </SectionStyled>
  )
}