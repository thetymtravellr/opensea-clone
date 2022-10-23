import { ToggleButtonGroup, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import CollectionMenu from './components/CollectionMenu';
import { CollectionMenuButton } from './components/CollectionMenu/style';
import CollectionTable from './components/CollectionTable';
import { trendingItems } from './data';
import { CollectionButtonsContainer, TrendingButton, TrendingButtonsContainer, TrendingContainer, TrendingItemsContainer } from './style';

const TrendingSection = () => {

    const [active, setActive] = useState('trending');
    const handleActive = (event, newActive) => {
        setActive(newActive);
    };
    const desktop = useMediaQuery('(min-width:992px)');
    
    return (
        <TrendingContainer>
            <Container>
                <TrendingButtonsContainer>
                    <ToggleButtonGroup
                        value={active}
                        exclusive
                        onChange={handleActive}
                        aria-label="text alignment"
                    >
                        <TrendingButton value="trending" aria-label="trending">
                            Trending
                        </TrendingButton>
                        <TrendingButton value="top" aria-label="top">
                            Top
                        </TrendingButton>
                    </ToggleButtonGroup>
                    <CollectionButtonsContainer>
                        <CollectionMenu active={active}/>
                        <CollectionMenuButton >View all</CollectionMenuButton>
                    </CollectionButtonsContainer>
                </TrendingButtonsContainer>
                <TrendingItemsContainer>
                    <CollectionTable data={trendingItems.slice(0, 5)} listPos={1} active={active}/>
                    { desktop && <CollectionTable data={trendingItems.slice(5, 10)} listPos={2}/>}
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