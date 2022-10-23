import RefreshIcon from '@mui/icons-material/Refresh';
import { Button, Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'src/context/GlobalContext';
import ItemsCard from '~components/Cards/Items/ItemsCard';
import { data } from "./data/index";
import { FilterBodyStyled, FilterHeading, FilterRefresh } from './style';

const FilterBody = () => {
    const [content, setContent] = useState(true);
    const { value, filterOn, gridValue, matches } = useContext(GlobalContext)

    useEffect(() => {
        if (value === 2) {
            setContent(false)
        } else {
            setContent(true)
        }
    }, [value])

    return (
        <FilterBodyStyled>
            <FilterHeading>
                <FilterRefresh>
                    <Button>
                        <RefreshIcon />
                    </Button>
                    <Typography variant='base'>
                        Updated 49m ago
                    </Typography>
                </FilterRefresh>
                <Typography sx={{ fontWeight: 600 }}>
                    7,777 items
                </Typography>
            </FilterHeading>
            <Grid container spacing={1}>
                {
                    data.map(el => (
                        <Grid key={el.price} item xs={6} md={gridValue}>
                            <ItemsCard name={el.name} price={el.price} image={el.image} lastSale={el.lastSale} endsIn={el.endsIn} content={content} />
                        </Grid>
                    ))
                }
            </Grid>
        </FilterBodyStyled >
    )
}

export default FilterBody