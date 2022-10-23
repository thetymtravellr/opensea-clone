import { Grid } from "@mui/material"
import BlogPosts from "~containers/Blogposts/Blog"
import BlogDetailsStyled from "./style"
const postData = [
  {
    image:"https://blogmigration.kinsta.cloud/wp-content/uploads/2022/01/image-10.png",
    badge:"Announcement",
    date:"September 14, 2022",
    title:"Introducing The New OpenSea Homepage",
    text:"The homepage of OpenSea is often the first place people visit to explore the vast world of NFTs. We’re always looking for..."
 },
 {
    image:"https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/00Lighthouse-Header-2048x1365.jpg",
    badge:"Announcement",
    date:"September 13, 2022",
    title:"Why We Don’t Mind the Dip(s)",
    text:"When we started OpenSea in late 2017, we were realistic about a range of potential outcomes – from a niche community to..."
 },
 {
    image:"https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/76edde93ea6402d5818fbc03767aeda0.jpg",
    badge:"Announcement",
    date:"August 30, 2022",
    title:"Polygon and Klaytn on Seaport",
    text:"In June, we introduced Seaport — a brand new, open-source, web3 marketplace protocol for safely and efficiently buying and selling NFTs. Launched..."
 },
]
const BlogDetails = () => {
  return(<BlogDetailsStyled>
            <BlogDetailsStyled.Container>
                <BlogDetailsStyled.ContainerInner>
                    <Grid container justifyContent={"center"}>
                      <Grid item lg={8}>
                        <BlogDetailsStyled.Title>Expanding the Global NFT Ecosystem: A Preview of Chain Expansion and Language Support</BlogDetailsStyled.Title>
                        <BlogDetailsStyled.Meta>
                          <span className="date text-muted"><a href="/">September 21, 2022</a></span>
                          <span className="author">By <a href="/blog/details" className="text-muted">Shiva Rajaraman</a></span>
                          <span className="category">Announcement</span>
                        </BlogDetailsStyled.Meta>
                        <BlogDetailsStyled.Image>
                          <img src="/images/blog/details-1.jpg"/>
                        </BlogDetailsStyled.Image>
                        <BlogDetailsStyled.TextBody>
                          <BlogDetailsStyled.Text>At OpenSea, we believe that NFTs are foundational technology that will eventually underpin thousands of use cases and industries. But today, their applications are limited by a few things — including technology, patience, and in some respects, language. The NFT community is global, and a big part of our vision is to accelerate the ecosystem so people can engage with NFTs across chains, languages, verticals, and more. So as we step into Q4 of 2022, one of our core focus areas is Expansion. </BlogDetailsStyled.Text>
                          <BlogDetailsStyled.Text>In this blog, we’ll share more about our Expansion workstream, and give you a preview of what’s ahead. TL;DR – we’re going to be adding more chains and supporting more languages across our product(s) and Help Center. </BlogDetailsStyled.Text>
                          <BlogDetailsStyled.Text><strong>Chain Expansion</strong> </BlogDetailsStyled.Text>
                          <BlogDetailsStyled.Text>We believe the future of web3 is multi-chain; and it’s always been our goal to offer the best selection — and to connect people with NFTs and creators across every chain possible. Furthermore, it’s worth noting that some chains are more popular across different communities and use cases than others. So our chain expansion work is important to provide the global NFT community with more choice when navigating the ecosystem.</BlogDetailsStyled.Text>
                          <BlogDetailsStyled.Text>
While OpenSea started on Ethereum, it’s far from the only chain that we support. Today, we work across Ethereum, Polygon, Klaytn, and Solana. In the coming weeks, you can expect to see expanded chain support for more of the biggest chains, with additional updates coming in 2023. </BlogDetailsStyled.Text>
                          <BlogDetailsStyled.Text><strong>Internationalization</strong></BlogDetailsStyled.Text>
                          <BlogDetailsStyled.Text>Similarly, the NFT ecosystem is already global in scale; yet at this stage, OpenSea’s product has been limited to English. In the coming weeks and months, we’ll be expanding our language support – including simplified and traditional Chinese, Korean, Japanese, French, Spanish, and German. </BlogDetailsStyled.Text>

                          <BlogDetailsStyled.Text>We think this work is important, so we’re optimizing for speed and feedback over completeness or perfection. Right now, we’re focused on delivering high-quality language support across our product and top Help Center articles, and will continue to translate more of our content over the coming quarters. </BlogDetailsStyled.Text>

                          <BlogDetailsStyled.Text>We’re excited to kick off our work in this area — to better reflect the creators, developers and collectors in our community, and to help grow the NFT ecosystem globally — and we’d love to hear your feedback! Please join the conversation in our Discord. </BlogDetailsStyled.Text>

                        </BlogDetailsStyled.TextBody>
                        <hr/>
                        <BlogDetailsStyled.Footer>
                            <BlogDetailsStyled.ProfileBlock>
                                <div className="profile-image">
                                  <img src="/images/profile-images/1.png"/>
                                </div>
                                <div className="profile-body">
                                  <span className="profile-author">Shiva Rajaraman</span>
                                </div>
                            </BlogDetailsStyled.ProfileBlock>
                            <BlogDetailsStyled.NavigationWrapper>
                              <BlogDetailsStyled.Navigation>
                                <a href="">Drops on OpenSea: An Immersive and Secure Minting Experience</a>
                              </BlogDetailsStyled.Navigation>
                              <BlogDetailsStyled.Navigation next>
                                <a href="">Drops on OpenSea: An Immersive and Secure Minting Experience</a>
                              </BlogDetailsStyled.Navigation>
                            </BlogDetailsStyled.NavigationWrapper>
                        </BlogDetailsStyled.Footer>
                      </Grid>
                    </Grid>
                </BlogDetailsStyled.ContainerInner>
                <BlogDetailsStyled.TitleMedium>
                    Other similar posts
                </BlogDetailsStyled.TitleMedium>
                <BlogPosts data={postData}/>
            </BlogDetailsStyled.Container>
         </BlogDetailsStyled>
   )
}

export default BlogDetails