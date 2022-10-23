import styled from "@emotion/styled";

const BlogSectionStyled = styled.div`
  background:#F3FBFE;
  padding-top:120px;
  padding-bottom:41px;
  .container{
    padding-right: 15px;
    padding-left: 15px;
  }
  .MuiPagination-root{
    ul{
      justify-content:center;
    }
  }
`

BlogSectionStyled.SliderBlock = styled.div`

.swiper-pagination{
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 95px;
  &-bullet {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 10px;
    height: 10px;
    margin: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    border-radius: 500px;
    background: rgb(0 0 0 / 25%);
    &-active{
      background:#1868B7;
    }
  }
}
`


export default BlogSectionStyled;