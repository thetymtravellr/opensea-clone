import { Container, Grid } from "@mui/material";
import CategoryCard from "../../components/Cards/Category/CategoryCard";
import { SectionStyled } from "./style";
export default function Spotlight(){
  return(
    <SectionStyled>
      <Container>
          <SectionStyled.Title variant="lg" mb="40px" as="h2" >
          Browse by Category
          </SectionStyled.Title>
          <Grid container spacing={2}>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard image="https://opensea.io/static/images/categories/music.png" text="Music"/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard image="https://opensea.io/static/images/categories/photography-category.png" text="Photography"/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard image="https://opensea.io/static/images/categories/trading-cards.png" text="Trading Cards"/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard image="https://opensea.io/static/images/categories/utility.png" text="Utility"/>
            </Grid>
            <Grid item xxs={12} xs={6} md={4} xl5={3}>
              <CategoryCard image="https://opensea.io/static/images/categories/collectibles.png" text="Collectibles"/>
            </Grid>
          </Grid>
      </Container>
    </SectionStyled>
  )
}