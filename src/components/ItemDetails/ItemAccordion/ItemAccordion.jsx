import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import AccordionRegular from '~components/Accordions/Regular/AccordionRegular';
import FilterDropdown from '~components/Filter/Dropdown/FilterDropdown';
import Link from '~components/Link';
import SuperTag from '~components/SuperTag';
import { BodyStyled, CellStyled, HeadCellStyled, HeadStyled, RowStyled, TableStyled } from '~components/Table/style';
import { RegulerTooltip } from '~components/Tooltip';
import ItemCards from '../ItemCards';
import { DropdownContainer, TableContainerStyled } from './style';

const ETHLogo = 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
const data = [
    'Sales',
    'Listings',
    'Offers',
    'Collection offers',
    'Transfer',
  ];

const Table = ({ headData, bodyData, filter }) => {
    return (
       <>
       {
        filter &&
        <DropdownContainer>
        <FilterDropdown listText="Filter" labelProps={{ spacing: "30px" }} dropdownProps={{ minHeight: 350 }} options={data} index={0}/>
       </DropdownContainer>
       }
        <TableContainerStyled>
        <TableStyled className='table'>
            <HeadStyled border="1px solid rgb(229, 232, 235)" p="5px 10px">
                <RowStyled className='row'>
                    {
                        headData.map((item, index) => (
                            <CellStyled key={index * .003}>
                                <HeadCellStyled variant='2xs' fw="400">
                                    {item}
                                </HeadCellStyled>
                            </CellStyled>))
                    }
                </RowStyled>
            </HeadStyled>
            <BodyStyled bg="rgb(251, 253, 255)" className='table-body'>
                {
                    bodyData.map((item, index) => (
                        <RowStyled key={index} className="row" pt="20px" pb="20px" b="1px solid rgb(229, 232, 235)">
                            <CellStyled p="10px 0 0 10px">
                                <Typography variant="2xs" display="flex" alignItems="center">
                                    {item.icon}
                                    <span>
                                        {item.event}
                                        {item.expired && <span style={{ color: "red", marginLeft: "7px", fontSize: "11px" }}>{item.expired}</span>}
                                    </span>
                                </Typography>
                            </CellStyled>
                            <CellStyled >
                                <Typography variant="2xs">
                                    <SuperTag value={item.price} />
                                </Typography>
                            </CellStyled>
                            <CellStyled>
                                <Typography variant="2xs" as={Link} href="https://facebook.com">
                                    {item.from}
                                </Typography>
                            </CellStyled>
                            <CellStyled>
                                <Typography variant="2xs" as={Link} href="https://facebook.com">
                                    {item.to}
                                </Typography>
                            </CellStyled>
                            <CellStyled p="0 10px 0 0">
                                <RegulerTooltip title="hello">
                                    {
                                        item.expired
                                            ? item.date
                                            : <Link href="https://facebook.com" display="flex" alignItems="center">
                                                {item.date}
                                                &nbsp;
                                                <OpenInNewIcon />
                                            </Link>
                                    }
                                </RegulerTooltip>
                            </CellStyled>
                        </RowStyled>
                    ))
                }
            </BodyStyled>
        </TableStyled>
        </TableContainerStyled>
       </>
    )
}

const ItemAccordion = () => {
    const head1 = [
        'Event',
        'Price',
        'From',
        'To',
        'Date',
    ]
    const body1 = [
        {
            icon: <MultipleStopIcon fontSize='medium' sx={{ marginRight: "10px" }} />,
            event: 'Transfer',
            price: '',
            from: 'CE6576',
            to: 'A0824F',
            date: '34 minutes ago',

        },
        {
            icon: <ShoppingCartIcon fontSize='medium' sx={{ marginRight: "10px" }} />,
            event: 'Transfer',
            price: `<img src="${ETHLogo}" height="16px" width="16px" alt="logo"/> 0.043`,
            from: 'CE6576',
            to: 'A0824F',
            date: '38 minutes ago'
        },
        {
            icon: <SellIcon fontSize='medium' sx={{ marginRight: "10px" }} />,
            event: 'Transfer',
            price: `<img src="${ETHLogo}" height="16px" width="16px" alt="logo"/> 0.043`,
            from: 'CE6576',
            to: '',
            date: '2 hours ago'
        },
        {
            icon: <SellIcon fontSize='medium' sx={{ marginRight: "10px" }} />,
            event: 'Transfer',
            price: `<img src="${ETHLogo}" height="16px" width="16px" alt="logo"/> 0.043`,
            from: 'CE6576',
            to: '',
            date: '6 days ago',
            expired: "Expired"
        },
        {
            icon: <SellIcon fontSize='medium' sx={{ marginRight: "10px" }} />,
            event: 'List',
            price: `<img src="${ETHLogo}" height="16px" width="16px" alt="logo"/> 0.043`,
            from: 'CE6576',
            to: '',
            date: '7 days ago',
            expired: "Expired"
        },
    ]
    const head2 = []
    const body2 = []
    const match = useMediaQuery('(min-width:992px)')
    return (
        <Box>
            <Box mb="23px" mx={match ? "20px" : "0"}>
                <AccordionRegular
                    head={<><SwapVertIcon/> Item Activity</>}
                    text={<Table headData={head1} bodyData={body1} filter={true}/>}
                    className="item-accordion table-accordion"
                />
            </Box>
            <Box mb="23px" mx={match ? "20px" : "0"}>
                <AccordionRegular
                    head={<><ViewModuleIcon/> More From This Collection</>}
                    text={<ItemCards/>}
                    className="item-accordion table-accordion"
                />
            </Box>
        </Box>
    )
}

export default ItemAccordion