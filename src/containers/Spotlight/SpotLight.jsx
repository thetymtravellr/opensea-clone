import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import ProfileCard from "../../components/Cards/Profile/ProfileCard";
import SliderThreeColumn from "../../components/Sliders/ThreeColumn";
import { SectionStyled } from "./style";
export default function Spotlight(){
  return(
    <SectionStyled>
      <Container>
          <SectionStyled.Title variant="lg" mb="40px" as="h2">
          Sports spotlight
          </SectionStyled.Title>
          <SliderThreeColumn>
              <SwiperSlide>
                <ProfileCard title="CLONE X" avatar="https://i.seadn.io/gae/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg?auto=format&w=256" cover="https://i.seadn.io/gae/4elUtz8UyFYDH34vDxd4hpQX8S-EdkFq8s9ombkuQTDBWLwHvsjRM_RXWT2zX8Vt2bAiO2BHslwN57FyTW1JIn_FyFI0BsZfmvmeJQ?auto=format&w=1920"/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard title="Doodles" avatar="https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256" cover="https://i.seadn.io/gae/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw?auto=format&w=1920"/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard title="RENGA" avatar="https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&w=256" cover="https://i.seadn.io/gcs/files/45a3d8d422d07e8fe0256f432c872cf0.gif?auto=format&w=1920"/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard title="Rifters Exiles" avatar="https://i.seadn.io/gae/FKsIhacw77UKrIsrNwDSducGeib9HeDa5-OH08FMh9Nl4dYPyqY5jONFXgmBv7tUugcxfM_ZjVG83lrQHzrfFhFZLPdK--bc1h3HaA?auto=format&w=256" cover="https://i.seadn.io/gcs/files/db07d7a967ce5c8cbfe20541fcf7f09b.png?auto=format&w=1920"/>
              </SwiperSlide>
          </SliderThreeColumn>
      </Container>
    </SectionStyled>
  )
}