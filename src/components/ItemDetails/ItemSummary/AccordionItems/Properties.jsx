import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import PropertyCard from '~components/Cards/Property'
const TextStyled = styled(Typography)`
span:first-of-type {
    font-size: 16px;
}
`

const PropertiesContent = () => {
    return (
        <>
        
            <Grid container justifyContent={"center"} spacing={1}>
                <Grid item lg={4} xs={6} xxs={12}>
                    <PropertyCard 
                        subtitle="BACKGROUND" 
                        title="Green"
                        text={"20% have this trait"} 
                    />
                </Grid>
                <Grid item lg={4}>
                    <PropertyCard 
                        subtitle="BACKGROUND" 
                        title="Green"
                        text={"20% have this trait"} 
                    />
                </Grid>
                <Grid item lg={4}>
                    <PropertyCard 
                        subtitle="BACKGROUND" 
                        title="Green"
                        text={"20% have this trait"} 
                    />
                </Grid>
                <Grid item lg={4}>
                    <PropertyCard 
                        subtitle="BACKGROUND" 
                        title="Green"
                        text={"20% have this trait"} 
                    />
                </Grid>
                <Grid item lg={4}>
                    <PropertyCard 
                        subtitle="BACKGROUND" 
                        title="Green"
                        text={"20% have this trait"} 
                    />
                </Grid>
                <Grid item lg={4}>
                    <PropertyCard 
                        subtitle="BACKGROUND" 
                        title="Green"
                        text={"20% have this trait"} 
                    />
                </Grid>
                <Grid item lg={4}>
                    <PropertyCard 
                        subtitle="BACKGROUND" 
                        title="Green"
                        text={"20% have this trait"} 
                    />
                </Grid>
                <Grid item lg={4}>
                    <PropertyCard 
                        subtitle="BACKGROUND" 
                        title="Green"
                        text={"20% have this trait"} 
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default PropertiesContent