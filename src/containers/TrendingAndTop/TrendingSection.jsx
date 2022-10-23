import { Tabs, ToggleButtonGroup, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { users } from '../../../data/user';
import CollectionMenu from './components/CollectionMenu';
import { CollectionMenuButton } from './components/CollectionMenu/style';
import CollectionTable from './components/CollectionTable';
import { CollectionButtonsContainer, TrendingButton, TrendingButtonsContainer, TrendingContainer, TrendingItemsContainer } from './style';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const TrendingSection = () => {

    // const [active, setActive] = useState('trending');
    // const handleActive = (event, newActive) => {
    //     setActive(newActive);
    // };
    const [active, setActive] = React.useState(0);

    const handleChange = (event, newValue) => {
      setActive(newValue);
    };
    const desktop = useMediaQuery('(min-width:992px)');
    
    return (
        <TrendingContainer>
            <Container>
                <TrendingButtonsContainer>
                    <Tabs 
                        value={active}
                        exclusive
                        onChange={handleChange}
                        aria-label="text alignment"
                    >
                        <TrendingButton {...a11yProps(0)}>
                            Trending
                        </TrendingButton>
                        <TrendingButton {...a11yProps(0)}>
                            Top
                        </TrendingButton>
                    </Tabs>
                    <CollectionButtonsContainer>
                        <CollectionMenu active={active}/>
                        <CollectionMenuButton >View all</CollectionMenuButton>
                    </CollectionButtonsContainer>
                </TrendingButtonsContainer>
                <TrendingItemsContainer>
                    <CollectionTable data={users.slice(0, 5)} listPos={1} active={active} href=""/>
                    { desktop && <CollectionTable data={users.slice(5, 10)} listPos={2} active={active}/>}
                </TrendingItemsContainer>
            </Container>
        </TrendingContainer>
    )
}

export default TrendingSection

/* 
{
                    desktop && <Grid container columnSpacing={{ md: 15 }}>
                        <Grid item md={6} >
                            <TrendingItemGrid items={trendingItems.slice(0, 5)} listPos={1} />
                        </Grid>
                        <Grid item md={6} >
                            <TrendingItemGrid items={trendingItems.slice(5, 10)} listPos={2} />
                        </Grid>
                    </Grid>
                }
                {
                    !desktop && <Grid container>
                        <Grid item xs={12}>
                            <TrendingItemGrid items={trendingItems.slice(0, 5)} listPos={1} />
                        </Grid>
                    </Grid>
                }
*/