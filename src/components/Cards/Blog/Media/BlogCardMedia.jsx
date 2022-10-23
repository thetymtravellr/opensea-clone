import BlogStyled from "./style"

const BlogCardMedia = ({ image, href }) => {
  return (<BlogStyled>
    <BlogStyled.Image>
      <a href={href || "/blog/details"}>
        <img src={image || 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/09/OS_signal.png'} />
      </a>
    </BlogStyled.Image>
    <BlogStyled.Body>
      <BlogStyled.Badge>
        Announcement
      </BlogStyled.Badge>
      <BlogStyled.Title >
        <a href='/blog/details'>
          Our Efforts to Curb Fraud and Plagiarism – and What’s Next
        </a>
      </BlogStyled.Title>
      <BlogStyled.Text>
        At OpenSea, we believe that NFTs are foundational technology that will eventually underpin thousands of use cases and industries. But today, their...
      </BlogStyled.Text>
      <BlogStyled.Button href='/blog/details'>
        View Post
      </BlogStyled.Button>
    </BlogStyled.Body>
  </BlogStyled>
  )
}

export default BlogCardMedia