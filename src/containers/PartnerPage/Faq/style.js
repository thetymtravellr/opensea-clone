import styled from "@emotion/styled";

const FaqStyled = styled.div`
padding-top:80px;
padding-bottom:100px;
`

FaqStyled.Accordions = styled.div`
max-width: 700px;
margin:30px auto 0;
.text-link{
  color:rgb(32, 129, 226);
  &:hover{
    color:rgb(24, 104, 183);
  }
}
`
FaqStyled.Head = styled.div`
  max-width:702px;
  margin:0 auto;
  text-align:center;
  h2{
    margin-bottom:20px;
  }
  a{
    color:rgb(32, 129, 226);
  }
`


export default FaqStyled;