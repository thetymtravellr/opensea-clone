import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Box, Tooltip, Typography, useMediaQuery } from '@mui/material';
import AccordionRegular from '~components/Accordions/Regular/AccordionRegular';
import ButtonPrimary from '~components/Buttons/ButtonPrimary';
import { OfferBlockStyled, OfferButtonContainer, OfferHeadContainer, OfferPriceStyled, OfferSmall, OfferTimer, OfferTimerContainer } from './style';

const OfferHeadItem = () => {
    return <OfferHeadContainer>
        <Typography variant='base' component="span" display="flex" alignItems="center" columnGap="5px">
            <span><ScheduleIcon/></span> Sale ends October 20, 2022 at 5:24am GMT+6
        </Typography>
        <OfferTimerContainer>
            <OfferTimer>
                02
                <span>Days</span>
            </OfferTimer>
            <OfferTimer>
                10
                <span>Hours</span>
            </OfferTimer>
            <OfferTimer>
                24
                <span>Minutes</span>
            </OfferTimer>
            <OfferTimer>
                15
                <span>Seconds</span>
            </OfferTimer>
        </OfferTimerContainer>
    </OfferHeadContainer>
}

const OfferTextItem = () => {

    return <Box>
        <OfferPriceStyled>
            <Typography variant='2xs' component="span" mb="5px">
                Current Price
            </Typography>
            <Typography variant='md' component="span" className='currentPrice'>
                <Tooltip title="ETH" arrow placement='top'>
                    <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
                </Tooltip> 0.1519 <span>$200.19</span>
            </Typography>
        </OfferPriceStyled>
        <OfferButtonContainer>

            <Box>
                <ButtonPrimary width="100%">
                    Add to cart
                </ButtonPrimary>
            </Box>

            <Box className="offer-button-white">
                <ButtonPrimary width="100%">
                    <LocalOfferIcon /> Make offer
                </ButtonPrimary>
            </Box>
        </OfferButtonContainer>
    </Box>
}

const OfferTextItemSmall = () => {
    return (
        <OfferSmall>
            <OfferPriceStyled>
                <Typography variant='2xs' component="span" mb="5px">
                    Current Price
                </Typography>
                <Typography variant='md' component="span" className='currentPrice'>
                    <Tooltip title="ETH" arrow placement='top'>
                        <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
                    </Tooltip> 0.1519 <span>$200.19</span>
                </Typography>
            </OfferPriceStyled>
            <OfferButtonContainer>
                <Box className="offer-button-white">
                    <ButtonPrimary width="100%">
                        <LocalOfferIcon /> Make offer
                    </ButtonPrimary>
                </Box>
            </OfferButtonContainer>
        </OfferSmall>
    )
}

const OfferEndBlock = () => {
    const match = useMediaQuery('(min-width:600px)');
    return (
        <OfferBlockStyled>
            {
                match ?
                    <AccordionRegular head={<OfferHeadItem />}
                        text={<OfferTextItem />}
                        expanded={true}
                        className="offer-accordion"
                        alwaysOpen={true}
                        disableTitle={true}
                    />
                    : <OfferTextItemSmall />
            }
        </OfferBlockStyled>
    )
}

export default OfferEndBlock