import StarBorderIcon from '@mui/icons-material/StarBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { Children, useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalContext';
import { BodyStyled, CellStyled, CollectionImage, CollectionInfo, CollectionTitle, HeadCellStyled, HeadStyled, LinkRowStyled, MultilineText, RowStyled, TableStyled, VolumeText } from "~components/Table/style";
import { tableData } from "./data";

const StatsTable = () => {
    const { matches } = useContext(GlobalContext)
    return (
        <TableStyled>
            <HeadStyled className='sticky-head'>
                <RowStyled className='row'>
                    {
                        matches ?
                            <>
                                <CellStyled width="5%">
                                    <HeadCellStyled></HeadCellStyled>
                                </CellStyled>
                                <CellStyled width="50%">
                                    <HeadCellStyled>COLLECTION</HeadCellStyled>
                                </CellStyled>
                                <CellStyled>
                                    <HeadCellStyled>VOLUME</HeadCellStyled>
                                </CellStyled>
                                <CellStyled>
                                    <HeadCellStyled>CHANGE</HeadCellStyled>
                                </CellStyled>
                                <CellStyled>
                                    <HeadCellStyled>FLOOR PRICE</HeadCellStyled>
                                </CellStyled>
                                <CellStyled width="15%">
                                    <HeadCellStyled>SALES</HeadCellStyled>
                                </CellStyled>
                                <CellStyled>
                                    <HeadCellStyled>UNIQUE OWNERS</HeadCellStyled>
                                </CellStyled>
                                <CellStyled>
                                    <HeadCellStyled>ITEMS LISTED</HeadCellStyled>
                                </CellStyled>
                                <CellStyled width="7.5%">
                                    <HeadCellStyled></HeadCellStyled>
                                </CellStyled>
                            </>
                            : <>
                                <CellStyled width="5%">
                                    <HeadCellStyled></HeadCellStyled>
                                </CellStyled>
                                <CellStyled width="100%">
                                    <HeadCellStyled>COLLECTION</HeadCellStyled>
                                </CellStyled>
                                <CellStyled>
                                    <HeadCellStyled>VOLUME</HeadCellStyled>
                                </CellStyled>
                            </>
                    }
                </RowStyled>
            </HeadStyled>
            <BodyStyled>
                {
                    Children.toArray(tableData.map((el, i) => (
                        <LinkRowStyled className="row" href="/item-details">
                            {
                                matches
                                    ? <>
                                        <CellStyled width="5%">{i + 1}</CellStyled>
                                        <CellStyled width="50%">
                                            <CollectionInfo>
                                                <CollectionImage>
                                                    <img src={el.image} alt="collection" />
                                                </CollectionImage>
                                                <CollectionTitle>
                                                    <span className='title'>
                                                        {el.collection}
                                                        {el?.verified && <VerifiedIcon color='primary' />}
                                                    </span>
                                                </CollectionTitle>
                                            </CollectionInfo>
                                        </CellStyled>
                                        <CellStyled>{el.volume}</CellStyled>
                                        <CellStyled>
                                            <VolumeText variant='base' state={(el.increase && 'increase') || (el.decrease && 'decrease')}>
                                                <span className=''>{el.increase || el.decrease || '-'}</span>
                                            </VolumeText>
                                        </CellStyled>
                                        <CellStyled>{el.floorPrice}</CellStyled>
                                        <CellStyled width="15%">{el.sales}</CellStyled>
                                        <CellStyled>
                                            <MultilineText variant='base' lWeight="600">
                                                <span className='boldText'>
                                                    {Math.floor(el.uniqueOwner / 100)}%
                                                </span>
                                                <span className='lightText'>
                                                    {el.uniqueOwner} owners
                                                </span>
                                            </MultilineText>
                                        </CellStyled>
                                        <CellStyled>
                                            <MultilineText variant='base' lWeight="600">
                                                <span className='boldText'>
                                                    {(100 / el.totalItem) * el.listedItem}%
                                                </span>
                                                <span className='lightText'>
                                                    {el.listedItem} of {el.totalItem}
                                                </span>
                                            </MultilineText>
                                        </CellStyled>
                                        <CellStyled width="7.5%">
                                            <Tooltip title="Add to Watchlist" arrow placement='top'>
                                                <IconButton>
                                                    <StarBorderIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </CellStyled>
                                    </>
                                    : <>
                                        <CellStyled width="5%">{i + 1}</CellStyled>
                                        <CellStyled width="100%">
                                            <CollectionInfo>
                                                <CollectionImage>
                                                    <img src={el.image} alt="collection" />
                                                </CollectionImage>
                                                <CollectionTitle>
                                                    <MultilineText variant='3xs' textAlign="left">
                                                        <span className='title boldText'>
                                                            {el.collection}
                                                            {el?.verified && <VerifiedIcon color='primary' fontSize="12px"/>}
                                                        </span>
                                                        <span className='lightText'>
                                                            Floor Price: {el.floorPrice}
                                                        </span>
                                                    </MultilineText>
                                                </CollectionTitle>
                                            </CollectionInfo>
                                        </CellStyled>
                                        <CellStyled>
                                            <Typography variant='5xs'>
                                                {el.volume}
                                            </Typography>
                                        </CellStyled>
                                    </>
                            }
                        </LinkRowStyled>
                    )))
                }
            </BodyStyled>
        </TableStyled>
    )
}

export default StatsTable