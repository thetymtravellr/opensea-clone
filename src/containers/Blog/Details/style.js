import styled from "@emotion/styled"

const BlogDetailsStyled = styled.div`
background: #F3FBFE;
padding-top:20px;
padding-bottom:40px;
hr{
  background-color: #ccc;
  border: 0;
  height: 1px;
  margin-bottom: 1.5em;
  
  box-sizing: content-box;
  overflow: visible;
  margin-top: 1rem;
}
`

BlogDetailsStyled.Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px){
      max-width: 540px;
  }
  @media (min-width: 768px){
    max-width: 720px;
  }
  @media (min-width: 992px){
    max-width: 960px;
  }
  @media (min-width: 1200px){
    max-width: 1300px;
  }

`

BlogDetailsStyled.ContainerInner = styled.div`

border-radius: 10px;
border: 1px solid #E5E8EB;
background:#fff;
margin-top: 75px;
padding: 1.7rem;
@media (min-width:768px){
  padding: 5rem;
  padding-top: 3rem;
  margin-top: 100px;
}
`
BlogDetailsStyled.Title = styled.h2`
font-size:2.6rem;
font-weight:600;
line-height:1.3;
@media (max-width: 767px){
  font-size: 1.9rem;
}  
`
BlogDetailsStyled.TitleMedium = styled.h3`
padding-top:1.875rem;
font-size: 2rem;
  margin: 30px auto 40px;
  text-align: center;
  font-weight: 600;
`
BlogDetailsStyled.Meta = styled.div`
margin-top: 18px;
color:#404040;
font-size:14px;
.text-muted{
  color:#999;
}
span{
  padding-right: 0.8rem;
}
// .date{

// }
// .author{

// }
// .category{}

`
BlogDetailsStyled.Image = styled.div`
  margin-top:16px;
  img{
    width:100%;
    border-radius: 10px;
    border: 1px solid #e5e8eb;
  }
`
BlogDetailsStyled.TextBody = styled.div`
  margin-top:16px;
`
BlogDetailsStyled.Text = styled.p`
  font-size: 16px;
  line-height: 2;
  color: #353840;
  margin-bottom: 1.2em;
`
BlogDetailsStyled.ProfileBlock = styled.div`
display:flex;
.profile-image{
    min-width:80px;
    max-width:80px;
    min-height:80px;
    max-height:80px;
    border-radius:500px;
    flex: 0 1 80px;
    margin-right: 20px;
    img{
      width:100%;
      border-radius: inherit;
    }
  }
  .profile-body{
    flex: 1;
  }
  .profile-author{
    margin-top: 0;
    font-weight: 600;
    margin-bottom: 8px;
    font-size:18px;
  }
  `
  BlogDetailsStyled.Footer = styled.div`
  padding-top:40px;
  
  `
  BlogDetailsStyled.NavigationWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  margin:40px -15px 0;
  
  `
  BlogDetailsStyled.Navigation = styled.div`
  color: #04111D;
  font-size: 16px;
  font-weight: 600;
  width:50%;
  padding:0 15px;
  a{
    transition:.4s;
    &:hover{
      color:#22A7F0;
    }
  }
  &:before{
    content: 'Previous Post';
    display: block;
    font-weight:400;
    color: #999;
  }
  ${({next}) => next && `
  &:before{
    content:'Next Post'
  }
    text-align:right;
  `}
  `



export default BlogDetailsStyled