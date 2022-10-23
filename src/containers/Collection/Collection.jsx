import { Container, Grid, Typography } from "@mui/material";
import ProfileCard from "../../components/Cards/Profile/ProfileCard";
import FilterList from "../../components/FilterList/FilterList";
import { filters } from "./data";
import { CollectionStyled } from "./style";

export default function Collection() {
   return (
      <CollectionStyled>
         <Container>
            <Typography variant="2xl" pb="58px" as="h1" sx={{ color: ({ palette }) => palette.black}}> Explore collections </Typography>
            <FilterList listArray={filters} />

            <Grid container rowSpacing={3} columnSpacing={3}>
               <Grid item xs={4}>
                  <ProfileCard />
               </Grid>
               <Grid item xs={4}>
                  <ProfileCard />
               </Grid>
               <Grid item xs={4}>
                  <ProfileCard />
               </Grid>
               <Grid item xs={4}>
                  <ProfileCard />
               </Grid>
               <Grid item xs={4}>
                  <ProfileCard />
               </Grid>
               <Grid item xs={4}>
                  <ProfileCard />
               </Grid>
            </Grid>
         </Container>
      </CollectionStyled>
   )
}