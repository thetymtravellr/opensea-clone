import { Box, Typography } from "@mui/material";
import Link from "~components/Link";
import IconTooltip from "~components/Tooltip/IconTooltip";
import { ButtonContainer, ItemCard, ItemCardContent, ItemCartButton, ItemsCardImage } from "./style";

const ItemsCard = ({ name, image, price, lastSale, endsIn, content }) => {
   
    return (
        <ItemCard>
            <Link href="/item-details">
                <ItemsCardImage content={content}>
                    <img src={image} alt="" />
                </ItemsCardImage>
                {
                    content &&
                    <>
                        <ItemCardContent>
                            <Typography variant="3xs" sx={{ fontWeight: '700' }}>
                                {name}
                            </Typography>
                            <Box>
                                <Typography variant="5xs">
                                    price
                                </Typography>
                                <Typography sx={{ fontWeight: '600', marginLeft: "0.3rem", display: 'flex', alignItems: 'center' }}>
                                    <IconTooltip /> {price}
                                </Typography>
                            </Box>
                            <Typography variant="5xs" sx={{ fontWeight: '500' }}>
                                {lastSale && <>
                                    last sale: <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="" style={{ width: '8px' }} /> {lastSale}
                                </>}
                                {endsIn && `ends in: ${endsIn}`}
                            </Typography>

                        </ItemCardContent>
                        <ButtonContainer className="btn-container">
                            <ItemCartButton>
                                Add to cart
                            </ItemCartButton>
                        </ButtonContainer>
                    </>
                }
            </Link>

        </ItemCard>
    )
}

export default ItemsCard