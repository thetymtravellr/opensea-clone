import { Typography } from "@mui/material";
import WhatStyled from "./style";
import WidgetMedia from "~components/Widget/Media";
import Container from "~containers/Layouts/Container";
import { Children } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';


const data = [
  {
    icon:<ShoppingCartOutlinedIcon/>,
  title:"Generate Revenue",
  text:"With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from direct sales to secondary sales"
},
  {
    icon:<ShoppingCartOutlinedIcon/>,
  title:"Reach Millions",
  text:"With over thousands of users and followers, we can help you reach a large audience of collectors"
},
  {
    icon:<ShoppingCartOutlinedIcon/>,
  title:"Spend Less",
  text:"Compared with other NFT marketplaces, we have lowest fees in the space allowing you to spend less with your created collection"
},
  {
    icon:<ShoppingCartOutlinedIcon/>,
  title:"Robust Features",
  text:"With the most powerful way for users to buy and sell NFTS, we offer the most advanced features"
}
]
const TaxesFeature = () => {
  return (
    <WhatStyled>
      <Container>
        <WhatStyled.Head>
          <Typography variant="xl" component="h2" className="hero-title">
            What OpenSea users get
          </Typography>
        </WhatStyled.Head>
        <WhatStyled.Widgets>
          {Children.toArray(data.map(({icon,title,text})=>{
            return(
              <WhatStyled.WidgetCol>
                <WidgetMedia title={title} text={text} icon={icon}/>
            </WhatStyled.WidgetCol>
            )
          }))}
            
            
        </WhatStyled.Widgets>
      </Container>
    </WhatStyled>
  );
};

export default TaxesFeature;



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