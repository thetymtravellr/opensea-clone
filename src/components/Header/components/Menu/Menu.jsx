import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Children } from 'react';
import Link from '~components/Link';
import { menuItems } from "./data";
import IconMenuDropdown from './IconMenuDropdown';
import MenuItem from "./MenuItem";
import { MenuDrawerButtonStyle, MenuItemStyle, MenuStyle } from "./style";
// const MenuItemLink = ({children,href="/",...props}) => <MenuLink as={Link} href={href}>{children}</MenuLink>
export default function HeaderMenu({ toggleDrawer, drawer, toggleMobileDrawer, mobileDrawer }) {
    const desktop = useMediaQuery('(min-width:992px)');
    return (
        <MenuStyle component="ul" direction="row">
            {desktop && Children.toArray(
                menuItems?.map((item, index) => {
                    return (
                        <MenuItem key={index + item.label} label={item.label} link={item.link} icon={item.icon} dropdown={item.dropdown} social={item.social} />
                    )
                }
                ))}
            {
                desktop && (
                    <MenuItemStyle>
                        <Link href="/" className="menu-item-icon">
                            <AccountCircleOutlinedIcon />
                        </Link>
                        <IconMenuDropdown />
                    </MenuItemStyle>
                )
            }

            <MenuItemStyle>
                {
                    desktop
                        ? <MenuDrawerButtonStyle onClick={toggleDrawer(!drawer)}>
                            <AccountBalanceWalletOutlinedIcon />
                        </MenuDrawerButtonStyle>
                        : <MenuDrawerButtonStyle onClick={toggleMobileDrawer(!mobileDrawer)}>
                            {
                                mobileDrawer
                                    ? <CloseOutlinedIcon />
                                    : <MenuIcon />
                            }
                        </MenuDrawerButtonStyle>
                }
            </MenuItemStyle>
            {
                desktop && (
                    <MenuItemStyle>
                        <Link href="/" className="menu-item-icon">
                            <ShoppingCartOutlinedIcon />
                        </Link>
                    </MenuItemStyle>
                )
            }
        </MenuStyle>
    )
}

// {item?.link && <Link href="/test">{item.label}</Link>}