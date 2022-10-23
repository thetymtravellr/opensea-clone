import { Container, Grid, Toolbar } from "@mui/material"

import ProfileCard from "~components/Cards/Profile/ProfileCard"
import Link from "~components/Link"
import CollectionBanner from "../Common/Banner/CollectionBanner"
import PageIntro from "../Common/Intro/PageIntro"
// import { data } from "./data/index"
import { SectionStyled } from "./style"

const SolanaCollectionContent = ({ banner, title,text, data }) => {

    return (
        <>
            <Toolbar />
            <CollectionBanner image={banner} />
            <SectionStyled>
                <Container>
                    <PageIntro 
                    text={text} 
                        title={title}/>
                    <SectionStyled.Title variant="sm" mb="24px" as="h4" >
                        Trending Collections
                    </SectionStyled.Title>
                    <Grid container spacing={2}>
                        {
                            data.map((el, i) => (
                                <Grid Grid item xxs={12} xs={6} md={4} xl5={3} key={i * .541522} >
                                    <ProfileCard title={el.title} avatar={el.profileImage} cover={el.productImage} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </SectionStyled>
        </>
    )
}

export default SolanaCollectionContent