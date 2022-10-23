import { Typography } from "@mui/material";
import AccordionLined from "~components/Accordions/Lined/AccordionLined";
import Container from "~containers/Layouts/Container";
import FaqStyled from "./style";

const PartnerFaq = () => {
  return (
    <FaqStyled>
      <Container>
        <FaqStyled.Head>
          <Typography variant="xl" component="h2" className="hero-title">
            FAQs
          </Typography>
          <Typography color="rgb(53, 56, 64)" variant="base" component="p">
            For more FAQs visit our partnership page in our <a href="/">help center</a>
          </Typography>
        </FaqStyled.Head>
        <FaqStyled.Accordions>
          <AccordionLined head="What is an NFT? What makes them so great?" text="An NFT is a digital asset stored on the blockchain. These assets hold information, like descriptions, properties, and media files. NFTs are unique, one-of-a-kind, and non-interchangeable.The history of every NFT is recorded on the blockchain, meaning buyers can prove their ownership and creators can receive creator earnings every time their work is re-sold. NFTs can be traded on marketplaces, proudly displayed in online galleries or used to access exclusive content and real-life experiences."/>
          <AccordionLined head="What makes OpenSea special?" text="OpenSea is the largest NFT marketplace, with the most users and projects.

Sellers can benefit from creator earnings of up to 10% on OpenSea. Combined with our secondary market dominance, content curation, and sorting features, your NFTs will be primed for success long after the initial sale."/>
          <AccordionLined head="What does a partnership with OpenSea entail?" text={<>OpenSea partners can enjoy guidance from our industry leading experts on NFT development, sale structure, and promotion. <br/><br/>

Once you’ve finalized your content, we will advise on pricing based on previous sales and current market trends. Our dedicated team will make sure you feel comfortable using the platform and advise on best practices.</>}/>
          <AccordionLined head="How do we get started?" text={<>Currently, we’re most interested in promoting projects that have multi-tiered sales (i.e. 1-of-1s, 1-of-manys, etc), have interesting & unique artwork, include robust digital unlockable content experiences, and have already been marketed in well-trafficked channels. If you fit this description, please fill in our partnership request form <a href="/" className="text-link">here</a>.</>}/>
        </FaqStyled.Accordions>
      </Container>
    </FaqStyled>
  );
};

export default PartnerFaq;
