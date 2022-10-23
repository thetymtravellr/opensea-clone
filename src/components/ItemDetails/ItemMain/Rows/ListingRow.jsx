import styled from '@emotion/styled';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Button, Typography } from '@mui/material';
import { CellStyled, RowStyled } from '~components/Table/style';
import { RegulerTooltip } from '~components/Tooltip';



const RowContainer = styled.div`
font-size: 14px;

.row {
    border-bottom: 1px solid rgb(229, 232, 235);
    padding: 10px 10px;
}

.disableNth {

}

.currencyIcon {
    width: 16px;
    height: 16px;
    margin-right: 5px;
}
.price {
    span {
        font-weight: 500;
        margin-right: 5px;
    }
}

.purchase-btn {
    background-color: rgb(46, 142, 238);
    color: #fff;
    &:hover: {
        background: rgb(46, 142, 238);
        transition: all 0.2s ease 0s;
        boxShadow: rgb(0 0 0 / 10%) 0px 2px 10px;
    }
}
`

const ListingRow = ({ data }) => {
    const { priceIn, price, usd, expiration, from, purchase, floorDifference } = data;
    return (
        <RowContainer>
            <RowStyled className="row">
                <CellStyled >
                    <RegulerTooltip title={priceIn?.toUpperCase()}>
                        {
                            priceIn === 'eth' &&
                            <img className='currencyIcon' src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
                        }
                        {
                            priceIn === 'weth' &&
                            <img className='currencyIcon' src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" />
                        }
                    </RegulerTooltip>
                    <Typography variant="2xs" className="price">
                        <span>{price}</span>
                        {priceIn?.toUpperCase()}
                    </Typography>
                </CellStyled>
                <CellStyled>
                    {usd}
                </CellStyled>
                {
                    floorDifference &&
                    <CellStyled justifyContent="flex-start">
                        {
                            floorDifference === "empty"
                            ? <span>&nbsp;</span>
                            : floorDifference
                        }
                    </CellStyled>
                }
                <CellStyled justifyContent="flex-start">
                    <RegulerTooltip title="2000">
                        <span>{expiration}</span>
                    </RegulerTooltip>
                </CellStyled>
                <CellStyled justifyContent="flex-start">
                    {from}
                </CellStyled>
                {
                    purchase &&
                    <CellStyled width={!purchase ? "10%" : "20%"}>

                        <Button className="purchase-btn">
                            <AddOutlinedIcon />
                            <ShoppingCartOutlined />

                        </Button>

                    </CellStyled>
                }
            </RowStyled>
        </RowContainer>
    )
}

export default ListingRow