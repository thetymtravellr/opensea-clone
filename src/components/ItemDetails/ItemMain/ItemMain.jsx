import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RefreshIcon from '@mui/icons-material/Refresh';
import SellIcon from '@mui/icons-material/Sell';
import ShareIcon from '@mui/icons-material/Share';
import TocIcon from '@mui/icons-material/Toc';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Tab, Typography, useMediaQuery } from "@mui/material";
import { useState } from 'react';
import AccordionRegular from '~components/Accordions/Regular/AccordionRegular';
import Link from '~components/Link';
import { RegulerTooltip } from '~components/Tooltip';
import ItemTable from '../ItemTable';
import ItemToolbar from '../ItemToolbar';
import { ToolbarButton } from '../style';
import OfferEndBlock from './OfferEndBlock';
import { ItemAccordionContainer } from './OfferEndBlock/style';
import ItemMainStyled, { ItemCollectionInfo, ItemCountStyled, ItemCountText } from './style';

const ItemMain = ({ ...rest }) => {
  const [expanded, setExpanded] = useState('');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const headData1 = [
    'Price',
    'USD Price',
    'Expiration',
    'From',
    ''
  ];

  const bodyData1 = {
    priceIn: 'eth',
    price: '0.043',
    usd: '$55.51',
    expiration: "about 7 hours",
    from: 'CE6576',
    purchase: "https://www.google.com"
  };

  const headData2 = ['Price', 'USD Price', 'Floor Difference', 'Expiration', 'From', 'empty'];
  const bodyData2 = [
    {
      priceIn: 'weth',
      price: '0.043',
      usd: '$55.51',
      floorDifference: 'empty',
      expiration: "about 7 hours",
      from: 'CE6576',
    },
    {
      priceIn: 'weth',
      price: '0.043',
      usd: '$55.51',
      floorDifference: 'empty',
      expiration: "about 7 hours",
      from: 'CE6576',
    },
    {
      priceIn: 'weth',
      price: '0.043',
      usd: '$55.51',
      floorDifference: 'empty',
      expiration: "about 7 hours",
      from: 'CE6576',
    },
    {
      priceIn: 'weth',
      price: '0.043',
      usd: '$55.51',
      floorDifference: 'empty',
      expiration: "about 7 hours",
      from: 'CE6576',
    },
    {
      priceIn: 'weth',
      price: '0.043',
      usd: '$55.51',
      floorDifference: 'empty',
      expiration: "about 7 hours",
      from: 'CE6576',
    }
  ]

  const match = useMediaQuery('(min-width:1024px)');
  return (
    <ItemMainStyled {...rest}>
      {
        match &&
        <>
          <ItemMainStyled.Header>
            <ItemCollectionInfo>
              <ItemCollectionInfo.Detail>
                <Link href='/'>
                  Alphablocks NFT
                </Link>
              </ItemCollectionInfo.Detail>
              <ItemCollectionInfo.Toolbar>
                <ItemToolbar>
                  <>
                  <ToolbarButton>
                    <RegulerTooltip title="Refresh metadata">
                      <Tab icon={<RefreshIcon />} value="refresh" />
                    </RegulerTooltip>
                  </ToolbarButton>
                  <ToolbarButton>
                    <RegulerTooltip title="View on AlphaNFT">
                      <Tab icon={<OpenInNewIcon />} value="open" />
                    </RegulerTooltip>
                  </ToolbarButton>
                  <ToolbarButton>
                    <Tab icon={<ShareIcon />} value="share" />
                  </ToolbarButton>
                  </>
                </ItemToolbar>
              </ItemCollectionInfo.Toolbar>
            </ItemCollectionInfo>
            <Typography variant='md' as={'h1'}>
              AlphaBlocks #457
            </Typography>
          </ItemMainStyled.Header>
          <ItemCountStyled>
            <ItemCountText>
              Owned by <Link href="/"> 846D3B</Link>
            </ItemCountText>
            <ItemCountText>
              <VisibilityIcon />
              <span>15 views</span>
            </ItemCountText>
            <ItemCountText>
              <FavoriteIcon />
              <span>1 favorite</span>
            </ItemCountText>
          </ItemCountStyled>
        </>
      }

      <OfferEndBlock />
      <ItemAccordionContainer>
        <Box mb="23px">
          <AccordionRegular
            head={<><SellIcon /> Listings</>}
            text={<ItemTable headData={headData1} bodyData={bodyData1} />}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            className="item-accordion table-accordion"
          />
        </Box>
        <Box mb="23px">
          <AccordionRegular head={<><TocIcon /> Offers</>}
            text={<ItemTable headData={headData2} bodyData={bodyData2} bodyP="10px 0" />}
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            className="item-accordion text-accordion"
            style={{ padding: 0 }}
            dp="0"
          />
        </Box>
      </ItemAccordionContainer>
    </ItemMainStyled>
  )
}

export default ItemMain

