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
`
BlogStyled.Image = styled.div`
  padding-bottom:66.667%;
  position:relative;
  display:block;
  a{
    
    border-radius: 10px 10px 0px 0px;
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
  }
`
BlogStyled.Body = styled.div`
padding:1.6rem;
`
BlogStyled.Title = styled.h3`
    font-size: 24px;
    line-height: 1.5;
    color: #04111d;
    text-decoration: none;
    font-weight: 600;
    margin-bottom:0.5rem;
`
BlogStyled.Date = styled.div`
  color: #707A83;
  padding-left: 0rem;
  padding-right: 0.8rem;
  font-size:16px;
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
  color: #353840;
`



export default BlogStyled