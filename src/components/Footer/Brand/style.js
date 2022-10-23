import styled from "@emotion/styled";

const BrandStyled = styled("div")(({theme})=>(
  `
  background: rgb(32, 129, 226);
  display:flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  @media (min-width: 320px) {
    height: 220px;
  }
  @media (min-width: 600px){
    height: 130px;
  }
  @media (min-width: 1200px){
    height: 100px;
  }
`
))
BrandStyled.Container = styled.div`
    width:100%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width: 320px){
      max-width: 355px;
    }
    @media (min-width: 600px){
      max-width: 550px;
    }
    @media (min-width: 1200px){
      max-width: 1280px;
    }

`
BrandStyled.Single = styled.a`
  svg{
    width: 126px;
    height: 25px;
    margin: 10px;
    fill:rgba(251, 253, 255, 0.75);
    &:hover{
      fill:rgb(251, 253, 255);
    }
  }
`
BrandStyled.Single.defaultProps = {
  href:"#"
}

export default BrandStyled;