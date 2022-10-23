import { Box } from '@mui/material';
import ButtonPrimary from '~components/Buttons/ButtonPrimary';
import ItemsCard from '../Cards/Items/ItemsCard';
import { data } from "./data";
import { CardWrapper, CollectionContainer, ItemCardsContainer } from './style';

const ItemCards = () => {

    return (
        <CollectionContainer>
            <ItemCardsContainer>
                <CardWrapper>
                    {
                        data.slice(0, 10).map((el) => (
                            <Box sx={{ width: "250px" }}>
                                <ItemsCard name={el.name} price={el.price} image={el.image} lastSale={el.lastSale} endsIn={el.endsIn} content={true} />
                            </Box>
                        ))
                    }
                </CardWrapper>
            </ItemCardsContainer>
            <Box className="offer-button-white">
                <ButtonPrimary width="fit-content">
                   View collection
                </ButtonPrimary>
            </Box>
        </CollectionContainer>
    )
}

export default ItemCards