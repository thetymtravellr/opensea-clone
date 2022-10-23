import LanguageIcon from '@mui/icons-material/Language'
import { Typography } from '@mui/material'
import { useState } from 'react'
import ButtonPrimary from '~components/Buttons/ButtonPrimary'
import ThemeModeButton from '../../Common/ThemeModeButton'
import { menuItems } from '../data'
import MenuFooter from './MenuFooter'
import MenuItem from './MenuItem'
import { MenuBody, MenuItemStyle, MenuItemStyled, MenuStyle, MobileMenuContainer, WalletButtonContainer } from './style'
import Submenu from './SubMenus/Submenu'

const MobileMenu = () => {
    const [menu, setMenu] = useState("main");
    return (
        <MobileMenuContainer>
            <MenuBody>
                {
                    menu === "main" && (
                        <>
                            <MenuStyle component="ul" direction="column">
                                {
                                    menuItems?.map((item, index) => {
                                        return (
                                            <MenuItem key={index + item.label} label={item.label} link={item.link} icon={item.icon} dropdown={item.dropdown} social={item.social} setMenu={setMenu} index={item.index}/>
                                        )
                                    })
                                }
                                <MenuItemStyle>
                                    <MenuItemStyled>
                                        <span>
                                            <LanguageIcon />
                                        </span>
                                        <Typography variant="base">
                                            Language
                                        </Typography>
                                    </MenuItemStyled>
                                </MenuItemStyle>
                                <ThemeModeButton />
                            </MenuStyle>
                            <WalletButtonContainer>
                                <ButtonPrimary className="wallet-btn">
                                    Connect Wallet
                                </ButtonPrimary>
                            </WalletButtonContainer>
                        </>
                    )
                }
                {
                    menu === "explore" && (
                        <Submenu setMenu={setMenu} index={0}/>
                    )
                }
                {
                    menu === "stats" && (
                        <Submenu setMenu={setMenu} index={1}/>
                    )
                }
                {
                    menu === "resources" && (
                        <Submenu setMenu={setMenu} index={2}/>
                    )
                }
            </MenuBody>
            <MenuFooter />
        </MobileMenuContainer>
    )
}

export default MobileMenu