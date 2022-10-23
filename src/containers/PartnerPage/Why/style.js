import styled from "@emotion/styled";

const WhyStyled = styled.div`
padding-top:80px;
padding-bottom:100px;
`

WhyStyled.Head = styled.div`
  max-width:702px;
  margin:0 auto;
  text-align:center;
  h2{
    margin-bottom:20px;
  }
`
WhyStyled.Widgets = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
`
WhyStyled.WidgetCol = styled.div`
  margin-left: auto;
  margin-right: auto;
  flex-shrink:0;
  margin-top:30px;
  width:100%;
  @media (min-width:600px){
    width:50%;
  }
  @media (min-width:992px){
    width:33.3333%;
  }
`
export default WhyStyled;