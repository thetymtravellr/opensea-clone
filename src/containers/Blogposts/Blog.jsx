import { Grid } from "@mui/material"
import { Children } from "react"
import BlogCard from "~components/Cards/Blog/Regular"

const postData = [
   {
      image:"https://blogmigration.kinsta.cloud/wp-content/uploads/2022/07/01Solana-BlogHeader.jpg",
      badge:"Announcement",
      date:"September 21, 2022",
      title:"Expanding the Global NFT Ecosystem: A Preview of Chain Expansion and Language Support",
      text:"At OpenSea, we believe that NFTs are foundational technology that will eventually underpin thousands of use cases and industries. But today, their..."
   },
   {
      image:"https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/Seaporot_Blogpost-2048x1365.jpg",
      badge:"Announcement",
      date:"September 19, 2022",
      title:"Drops on OpenSea: An Immersive and Secure Minting Experience",
      text:"Since our founding in 2017, OpenSea has become the best place to explore the vast world of NFTs.  As we continue to..."
   },
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
   {
      image:"/images/blog/1-mid.png",
      badge:"Announcement",
      date:"August 9, 2022",
      title:"An Update on Verification and Copymint Prevention",
      text:"As the NFT ecosystem evolves, OpenSea remains committed to improving trust and authenticity in the space. In May, we announced improvements to..."
   }
]

const BlogPosts = ({data=postData}) => {
  return(
      <Grid container spacing={2} justifyContent="center">
         {Children.toArray(data.map((item,index)=>{
            return(
               <Grid item lg={4} md={6} xs={10} xxs={12}>
                  <BlogCard {...item}/>
               </Grid>
            )
         }))}
      </Grid>
   )
}

export default BlogPosts