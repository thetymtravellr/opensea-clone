import Footer from '~components/Footer';
import { ItemMain, ItemSummary } from '~components/ItemDetails';
import ItemAccordion from '~components/ItemDetails/ItemAccordion/ItemAccordion';
import { ItemContainerStyled, ItemWrapper } from './style';

const ItemDetails = () => {

    return (
        <>
            <ItemContainerStyled>
                <ItemWrapper>
                    <ItemSummary className="item--summary" />
                    <ItemMain className="item--main" />
                </ItemWrapper>
                <ItemAccordion />

            </ItemContainerStyled>
            <Footer />
        </>
    )
}

export default ItemDetails