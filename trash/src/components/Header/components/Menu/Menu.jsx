import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from "../../../Link";
import { menuItems } from "./data";
import MenuItem from "./MenuItem";
import { MenuDrawerButtonStyle, MenuItemStyle, MenuStyle } from "./style";
// const MenuItemLink = ({children,href="/",...props}) => <MenuLink as={Link} href={href}>{children}</MenuLink>
export default function HeaderMenu({ toggleDrawer, drawer}){
    const desktop = useMediaQuery('(min-width:992px)');
    return(
        <MenuStyle component="ul"  direction="row"	>
            {desktop && menuItems?.map((item,index)=>{
                return(
                    <MenuItem key={index+item.label} label={item.label} link={item.link} dropdown={item.dropdown}/>
                )
            })}
            <MenuItemStyle>
                <Link href="/" className="menu-item-icon">
                    <AccountCircleOutlinedIcon/>
                </Link>
            </MenuItemStyle>
            <MenuItemStyle>
                <MenuDrawerButtonStyle onClick={toggleDrawer(!drawer)}>
                    <AccountBalanceWalletOutlinedIcon/>
                </MenuDrawerButtonStyle>
            </MenuItemStyle>
        </MenuStyle>
    )
}

// {item?.link && <Link href="/test">{item.label}</Link>}