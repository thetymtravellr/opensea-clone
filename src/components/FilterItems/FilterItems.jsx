import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Typography } from "@mui/material";
import { Children, useContext } from 'react';
import CountUp from 'react-countup';
import { GlobalContext } from 'src/context/GlobalContext';
import SuperTag from "~components/SuperTag";
import { BodyStyled, CellStyled, CollectionImage, CollectionInfo, CollectionTitle, HeadStyled, LinkRowStyled, MultilineText, RowStyled, TableStyled } from '~components/Table/style';

import { data } from "../../assets/data/index";
import { MobileRightCellText, TableIndexCellStyled, Truncate } from './style';

const FilterItems = () => {
    const { matches } = useContext(GlobalContext)

    return (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
            <TableStyled>
                {
                    matches && <HeadStyled className="bordered-head"> <RowStyled className='row'>
                        <CellStyled width="35%"></CellStyled>
                        <CellStyled width="50%">
                            <Typography variant="base" fontWeight="600">
                                Item
                            </Typography>
                        </CellStyled>
                        <CellStyled width="15%" justifyContent="center">
                            <Typography variant="base" fontWeight="600">
                                Price
                            </Typography>
                        </CellStyled>
                        <CellStyled width="15%" justifyContent="center">
                            <Typography variant="base" fontWeight="600">
                                Quantity
                            </Typography>
                        </CellStyled>
                        <CellStyled justifyContent="center">
                            <Typography variant="base" fontWeight="600">
                                From
                            </Typography>
                        </CellStyled>
                        <CellStyled justifyContent="center">
                            <Typography variant="base" fontWeight="600">
                                To
                            </Typography>
                        </CellStyled>
                        <CellStyled justifyContent="center">
                            <Typography variant="base" fontWeight="600">
                                Time
                            </Typography>
                        </CellStyled>
                    </RowStyled>
                    </HeadStyled>
                }

                <BodyStyled>
                    {
                        Children.toArray(data.map((el, i) => (
                            <LinkRowStyled className="row" href='/'>
                                {
                                    matches
                                        ? (
                                            <>
                                                <CellStyled width="35%">
                                                    <TableIndexCellStyled variant="3xs">
                                                        {
                                                            el.activity.svg === "list"
                                                                ? <LocalOfferIcon sx={{ height: "20px" }} />
                                                                : <SuperTag value={el.activity.svg} />
                                                        }
                                                        <span className='label'>
                                                            {el.activity.label}
                                                        </span>
                                                    </TableIndexCellStyled>
                                                </CellStyled>
                                                <CellStyled width="50%">
                                                    <CollectionInfo>
                                                        <CollectionImage>
                                                            <img src={el.image} alt="collection" />
                                                        </CollectionImage>
                                                        <CollectionTitle>
                                                            <MultilineText variant='base' textAlign="left">
                                                                <span className="lightText" style={{ display: 'flex', alignItems: 'center' }}>
                                                                    {el.collection}
                                                                    {el?.verified && <VerifiedIcon color='primary' sx={{ width: '16px', marginLeft: "6px" }} />}
                                                                </span>
                                                                <span className='boldText'>
                                                                    {el.itemTitle}
                                                                </span>
                                                            </MultilineText>
                                                        </CollectionTitle>
                                                    </CollectionInfo>
                                                </CellStyled>
                                                <CellStyled width="15%" justifyContent="center">
                                                    <MultilineText variant='base'>
                                                        <span className="boldText">
                                                            {el.floorPrice}
                                                        </span>
                                                        <span className="lightText">
                                                            ${el.floorPrice * 33.10}
                                                        </span>
                                                    </MultilineText>
                                                </CellStyled>
                                                <CellStyled width="15%" justifyContent="center">
                                                    <Typography>
                                                        {el.quantity}
                                                    </Typography>
                                                </CellStyled>
                                                <CellStyled justifyContent="center">
                                                    <Typography variant="2xs" fontWeight="300" sx={{ color: (theme) => theme.palette.primary.main }}>
                                                        {el.creator}
                                                    </Typography>
                                                </CellStyled>
                                                <CellStyled justifyContent="center">
                                                    <Typography >
                                                        {el.to || '---'}
                                                    </Typography>
                                                </CellStyled>
                                                <CellStyled justifyContent="center">
                                                    <Typography variant="2xs" fontWeight="300">
                                                        <CountUp end={30} duration={30} /> seconds ago
                                                    </Typography>
                                                </CellStyled>
                                            </>)
                                        : (
                                            <>
                                                <CellStyled width="60%">
                                                    <CollectionInfo>
                                                        <CollectionImage>
                                                            <img src={el.image} alt="collection" />
                                                        </CollectionImage>
                                                        <CollectionTitle>
                                                            <MultilineText variant='base' textAlign="left">
                                                                <span className="lightText" style={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Truncate>{el.collection}</Truncate>
                                                                    {el?.verified && <VerifiedIcon color='primary' sx={{ width: '16px', marginLeft: "6px" }} />}
                                                                </span>
                                                                <span className='boldText'>
                                                                    {el.itemTitle}
                                                                </span>
                                                            </MultilineText>
                                                        </CollectionTitle>
                                                    </CollectionInfo>
                                                </CellStyled>
                                                <CellStyled width="40%" justifyContent="center" >
                                                    <MobileRightCellText variant='3xs'>
                                                        <span className='label'>
                                                            {el.activity.label}
                                                        </span>
                                                        <span className="price">
                                                            {el.floorPrice}
                                                        </span>
                                                        <span> <CountUp end={30} duration={30} /> seconds ago</span>
                                                    </MobileRightCellText>
                                                </CellStyled>
                                            </>
                                        )
                                }
                            </LinkRowStyled>
                        )))
                    }
                </BodyStyled>
            </TableStyled>
        </Box>
    )
}

export default FilterItems