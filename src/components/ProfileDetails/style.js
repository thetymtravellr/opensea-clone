import styled from "@emotion/styled";

export const  ProfileTitleStyled = styled.div(({ theme }) => (`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:10px;
background: ${theme.palette.background.default}
`))

export const  ProfileSocialStyled = styled.div`
  display:flex;
  align-items:center;
  .icon-round-button{
    &:not(:first-of-type){
      margin-left:4px
    }
  }
`

export const SocialButtonDivider = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    height: 24px;
    width: 1px;
    background-color: rgb(229, 232, 235);
`

export const ProfileDetailsMeta = styled.div`
margin-top: 12px;
margin-bottom: 12px;
font-size:16px;
color: ${p => p.theme.palette.black};
  span{
    font-weight:600;
    // &:after{
    //   content:".",
    // }
  }
`

export const ProfileStats = styled.div`
  display:flex;
  margin:0 -20px;
  flex-wrap:wrap;
  
  &>div{
    padding:20px 20px 0;
   
    h4{
      font-weight: 600;
      font-size: 20px;
      color: ${p => p.theme.palette.black};
      line-height:1;
      margin-bottom:3px;
      img{
        margin-right: 0px;
        margin-top: -1px;
        width: 1em;
        height: 1em;
        font-size: 15px;
        display: inline-block;
      }
    }
    span{
      font-weight: 400;
      font-size: 16px;
      color: rgb(112, 122, 131);
    }
  }
`