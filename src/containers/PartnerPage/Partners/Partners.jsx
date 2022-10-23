import { Grid, Typography } from "@mui/material";
import PartnerStyled from "./style";
import Container from "~containers/Layouts/Container";
import ProfileCard from "~components/Cards/Profile/ProfileCard";
import { Children } from "react";

const data = [
  {
    image:{
      cover:"/images/profile-cover/1.png",
      avatar:"/images/profile-images/1.png"
    },
    title:"888 by Kevin Abosch",
  },
    {
    image:{
      cover:"/images/profile-cover/2.png",
      avatar:"/images/profile-images/2.png"
    },
    title:"888 by Kevin Abosch",
  },
  {
    image:{
      cover:"/images/profile-cover/3.png",
      avatar:"/images/profile-images/3.png"
    },
    title:"The Mike Tyson NFT Collection by Cory Van Lew",
  },
  {
    image:{
      cover:"/images/profile-cover/4.png",
      avatar:"/images/profile-images/4.png"
    },
    title:"DeLorean's 40th Anniversary NFT Collection",
  },
  {
    image:{
      cover:"/images/profile-cover/5.png",
      avatar:"/images/profile-images/7.png"
    },
    title:"Reddit CryptoSnoos",
  },
  {
    image:{
      cover:"/images/profile-cover/6.png",
      avatar:"/images/profile-images/6.png"
    },
    title:"PACMAN x Genies: Into The Future",
  }

]
const PartnerWhy = () => {
  return (
    <PartnerStyled>
      <Container>
        <PartnerStyled.Head>
          <Typography variant="xl" component="h2" className="hero-title">
            Who has partnered with us
          </Typography>
          <Typography color="rgb(53, 56, 64)" variant="base" component="p">
          We've collaborated with high-profile organizations and celebrities and generated millions of dollars in revenue in the process.
          </Typography>
        </PartnerStyled.Head>
        <Grid container spacing={2}>
        {Children.toArray(data.map(({image,title})=>{
            return(
              <Grid item lg={4} md={6} xxs={12}>
                <ProfileCard cover={image.cover} avatar={image.avatar} title={title}/>
              </Grid>
            )
          }))}
        </Grid>
        
        {/* <PartnerStyled.Widgets>
          {Children.toArray(data.map(({icon,title,text})=>{
            return(
              <PartnerStyled.WidgetCol>
                <ProfileCard/>
              </PartnerStyled.WidgetCol>
            )
          }))}
        </PartnerStyled.Widgets> */}
      </Container>
    </PartnerStyled>
  );
};

export default PartnerWhy;



// <WhyStyled.WidgetCol>
//                 <WidgetRegular title="Generate Revenue" text="With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from direct sales to secondary sales" icon={<img src="/images/svg/icon-money.svg"/>}/>
//             </WhyStyled.WidgetCol>
//             <WhyStyled.WidgetCol>
//                 <WidgetRegular title="Generate Revenue" text="With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from direct sales to secondary sales" icon={<img src="/images/svg/icon-money.svg"/>}/>
//             </WhyStyled.WidgetCol>
//             <WhyStyled.WidgetCol>
//                 <WidgetRegular title="Generate Revenue" text="With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from direct sales to secondary sales" icon={<img src="/images/svg/icon-money.svg"/>}/>
//             </WhyStyled.WidgetCol>
//             <WhyStyled.WidgetCol>
//                 <WidgetRegular title="Generate Revenue" text="With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from direct sales to secondary sales" icon={<img src="/images/svg/icon-money.svg"/>}/>
//             </WhyStyled.WidgetCol>