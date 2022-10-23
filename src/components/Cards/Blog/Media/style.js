import styled from "@emotion/styled"

const BlogStyled = styled.div`
  border-radius: 10px;
  border: 1px solid #E5E8EB;
  box-shadow: none;
  padding: 0;
  width: 100%;
  transition: transform 300ms ease-in-out;
  overflow: hidden;
  height: 100%;
  background: #fff;
  display:flex;
  flex-wrap:wrap;
`
BlogStyled.Image = styled.div`
position:relative;
  flex:0 1 100%;
  padding-bottom:66.6666%;
  @media (min-width:576px){
    flex:0 1 40%;
    padding-bottom:0%;
  }
  @media (min-width:992px){
    flex:0 1 50%;
  }
  a{
    display:block;
    border-radius: 10px  0px 10px 0px;
    border-bottom: 1px solid #E5E8EB;
    background: #8a939b;
    display: block;
    line-height: 0;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  img{
    width:100%;
    position:absolute;
    left:0;
    top:0;
    height:100%;
    object-fit:cover;
  }
`
BlogStyled.Body = styled.div`
padding:2rem ;
flex:0 1 100%;
  @media (min-width:576px){
    flex:0 1 60%;
  }
  @media (min-width:992px){
    flex:0 1 50%;
  }
`
BlogStyled.Title = styled.h3`
    font-size: 1.3rem;
    line-height: 1.3;
    color: #04111d;
    text-decoration: none;
    font-weight: 600;
    margin-bottom:0.5rem;
    @media(min-width:992px){
      font-size: 2rem;
    }
`
BlogStyled.Badge = styled.a`
  padding: 3px 6px 2px 6px;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #8a939b;
  display: inline-block;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  transition: 300ms;
  &:hover{
    background: #124e8a;
  }
`
BlogStyled.Text = styled.div`
  margin:1em 0 0;
  font-size: 16px;
  line-height: 1.68;
  color: #404040;
`
BlogStyled.Button = styled.a`
color: #fff;
background: #2081E2;
transition: 300ms;
border-radius: 5px;
font-size: 16px;
font-weight: 600;
padding: 12px 20px;
border: 1px solid #2081e2;
margin-top: 22px;
display: inline-block;
min-width: 162px;
text-align: center;
margin-top:40px;
`


export default BlogStyled