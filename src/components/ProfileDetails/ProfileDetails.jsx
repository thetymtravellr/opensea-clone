import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container, Typography, useMediaQuery } from "@mui/material";
import ProfileBreadcrumb from "../BreadCrumbs/Profile";
import ButtonIconRound from "../Buttons/ButtonIconRound";
import Link from "../Link";
import TextTrunacate from "../TextTrunacate";
import VarifiedTitle from "../VarifiedTitle";
import { ProfileDetailsMeta, ProfileStats, ProfileTitleStyled, SocialButtonDivider } from "./style";
import ProfileTitleWidgets from "./Widgets";

export default function ProfileDetails(){
  const isDesktop = useMediaQuery('(min-width:992px)');

  return(
    <>
      <ProfileBreadcrumb/>
      <Container>
        <ProfileTitleStyled>
          <VarifiedTitle title="ENS: Ethereum Name Service" variant="md" component="h3"/>
          <ProfileTitleWidgets dekstop={isDesktop}>
            {isDesktop && <>
            <ButtonIconRound tooltip={"Website"}>
              <LanguageIcon/>
            </ButtonIconRound>
            <ButtonIconRound tooltip={<>Website <span className="sub">Ownership Varified</span></>}>
              <TwitterIcon/>
            </ButtonIconRound>
            <SocialButtonDivider/>
            </>}
          </ProfileTitleWidgets>
        </ProfileTitleStyled>
        
            <VarifiedTitle 
                tooltipContent={<Typography variant="4xs" component="p" >This is a verified account. <Link> Learn More</Link></Typography>}
                iconSpacing="2px"
                iconSize="15px"
                ml="4px"
              >
                <span className="fw-regular mr-3">By</span>
              RENGA-inc
            </VarifiedTitle>
        
        <ProfileDetailsMeta>
          Items <span>7.8K</span>  ·  Created <span>Sep 2022</span>  ·  Creator fee <span>5%</span>
        </ProfileDetailsMeta>
        <TextTrunacate variant="base" maxWidth="860px">
            A handcrafted collection of 10,000 characters developed by artist DirtyRobot. Each with their own identity to be discovered within the wider stories of RENGA. In its purest form, RENGA is the art of storytelling.
        </TextTrunacate>
        <ProfileStats>
          <div>
            <h4><img src="/images/svg/image-crystial.svg"/> 14K</h4>
            <span>total volume</span>
          </div>
          <div>
            <h4><img src="/images/svg/image-crystial.svg"/> 2.4K</h4>
            <span>floor prices</span>
          </div>
          <div>
            <h4><img src="/images/svg/image-crystial.svg"/> 2.15</h4>
            <span>best offer</span>
          </div>
          <div>
            <h4>23%</h4>
            <span>listed</span>
          </div>
          <div>
            <h4>38%</h4>
            <span>unique owners</span>
          </div>
        </ProfileStats>
      </Container>
    </>
  )
}