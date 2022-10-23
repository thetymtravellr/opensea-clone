import styled from "@emotion/styled"
import Testimonial from "."


const TestimonialStyled = styled.div`
`
TestimonialStyled.Image = styled.div`
display: flex;
max-width: 450px;
width: 100%;
justify-content: center;
img{
  width:100%;
}
`
TestimonialStyled.Container = styled.div`
    padding: 80px 40px;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto; 
`
TestimonialStyled.Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`
TestimonialStyled.Row = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 60px;
    flex-direction: column;
    max-width: 100%;
    @media (min-width: 1200px) {
      flex-direction: row;
      max-width: min(1280px, 100% - 40px);
  }
`
TestimonialStyled.Texts = styled.div`
  display:flex;
  flex-direction: column;
  order: 1;
  margin-top: 0px;
  text-align: center;
  max-width: 720px;
  @media (min-width: 1200px){
    width: 45%;
    order: 0;
    text-align: left;
  }
  .testimonial-icon{
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    justify-content: center;
    @media (min-width:768px){
      justify-content: flex-start;
    }
    img{
      width:initial;
      height:initial
    }
  }
  .testimonial-text{
    font-weight: 600;
    font-size: 20px;
    color: rgb(4, 17, 29);
    line-height:28px;
  }
`
TestimonialStyled.User = styled.div`
margin-top:15px;
  h3{
    font-weight: 600;
    font-size: 16px;
    color: rgb(4, 17, 29);
    margin-bottom: 6px;
  }
`
// export const TestimonialImageStyled = styled.div`
//   text-align:center;
//   img{
//     max-width:100%;
//   }
//   @media (min-width:1200px){
//     flex-shrink:0;
//     width:50%;
//     text-align:left;
//   }
// `
// export const TestimonialTextsStyled = styled.div`
// .testimonial-icon{
//   margin-bottom: 30px;
// }
//   .testimonial-text{
//     margin-bottom:40px;
//     font-weight: 600;
//     font-size: 20px;
//     color: rgb(4, 17, 29);
//     line-height: 28px;
//     @media (max-width:1199px){
//       margin-top:40px;
//       text-align:center;
//     }
//   }
//   p{
//     margin-bottom:17px;
//   }
// `

export default TestimonialStyled