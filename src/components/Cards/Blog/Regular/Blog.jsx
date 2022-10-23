import BlogStyled from "./style"

const BlogCard = ({image,badge,title,date,text}) => {
  return(<BlogStyled>
          <BlogStyled.Image>
            <a href="/blog/details">
              <img src={image}/>
            </a>
          </BlogStyled.Image>
          <BlogStyled.Body>
              <BlogStyled.Badge href="/blog/details">
                  {badge}
              </BlogStyled.Badge>
              <BlogStyled.Title >
                <a href="/blog/details">
                {title}
                </a>
              </BlogStyled.Title>
              <BlogStyled.Date>
                {date}
              </BlogStyled.Date>
              <BlogStyled.Text>
                {text}
              </BlogStyled.Text>
          </BlogStyled.Body>
         </BlogStyled>
   )
}

export default BlogCard