import { Typography } from "@mui/material";
import WhyStyled from "./style";
import WidgetRegular from "~components/Widget/Regular";
import Container from "~containers/Layouts/Container";
import { Children } from "react";

const data = [
  {
    icon:"/images/svg/icon-money.svg",
  title:"Generate Revenue",
  text:"With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from direct sales to secondary sales"
},
  {
    icon:"/images/svg/icon-users.svg",
  title:"Reach Millions",
  text:"With over thousands of users and followers, we can help you reach a large audience of collectors"
},
  {
    icon:"/images/svg/wallet.svg",
  title:"Spend Less",
  text:"Compared with other NFT marketplaces, we have lowest fees in the space allowing you to spend less with your created collection"
},
  {
    icon:"/images/svg/collection.svg",
  title:"Robust Features",
  text:"With the most powerful way for users to buy and sell NFTS, we offer the most advanced features"
},
  {
    icon:"/images/svg/nfts.svg",
  title:"Breadth of Categories",
  text:"With over thousands of collections, we are proud to host the widest range of categories, ranging from digital to physical NFTs"
}
]
const PartnerWhy = () => {
  return (
    <WhyStyled>
      <Container>
        <WhyStyled.Head>
          <Typography variant="xl" component="h2" className="hero-title">
            Why partner with OpenSea
          </Typography>
          <Typography color="rgb(53, 56, 64)" variant="base" component="p">
            While we take pride in being the first and largest marketplace and in our robust feature set, we also help our partners succeed with the following...
          </Typography>
        </WhyStyled.Head>
        <WhyStyled.Widgets>
          {Children.toArray(data.map(({icon,title,text})=>{
            return(
              <WhyStyled.WidgetCol>
                <WidgetRegular title={title} text={text} icon={<img src={icon}/>}/>
            </WhyStyled.WidgetCol>
            )
          }))}
            
            
        </WhyStyled.Widgets>
      </Container>
    </WhyStyled>
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