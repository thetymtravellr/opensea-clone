import { Container, useMediaQuery, useScrollTrigger } from "@mui/material";
import PropTypes from 'prop-types';
import { useContext, useState } from "react";
import Link from "~components/Link";
import Logo from "~components/Logo";
import { GlobalContext } from "~context/GlobalContext";
import HeaderDrawer from "./components/Drawer/index";
import { MobileDrawerMain } from "./components/Drawer/MobileDrawer";
import HeaderMenu from "./components/Menu/Menu";
import HeaderSearch from "./components/Search/index";
import MobileSearchBox from "./components/Search/MobileSearchBox";
import { HeaderInnerStyle, HeaderLogoStyle, HeaderStyle } from "./style";

const HeaderSection = ({ window, bg, textColor, ...rest }) => {

    const { menuOpen, setMenuOpen } = useContext(GlobalContext)
    const matches = useMediaQuery('(min-width:767px)');
    const [drawer, setDrawer] = useState(false);
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenuOpen(open)
        setDrawer(open);
    };

    const toggleMobileDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenuOpen(open)
        setMobileDrawer(open);
    };

    const toggleMobileSearch = (open) => {
        setSearchOpen(open)
        setMenuOpen(open)
        if (mobileDrawer) {
            setMobileDrawer(false)
        }
    }

    const scrolling = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 25,
    });

    return (
        <>
            <HeaderStyle active={scrolling || drawer || bg} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, }} bg={bg} textColor={textColor} matches={matches}>
                <Container>
                    {
                        searchOpen ? (
                            <MobileSearchBox search={searchOpen} toggleMobileSearch={toggleMobileSearch} />
                        ) : (
                            <HeaderInnerStyle>
                                <HeaderLogoStyle>
                                    <Link href="/">
                                        <Logo />
                                    </Link>
                                </HeaderLogoStyle>
                                <HeaderSearch className="header-search" search={searchOpen} toggleMobileSearch={toggleMobileSearch} />
                                <HeaderMenu toggleDrawer={toggleDrawer} toggleMobileDrawer={toggleMobileDrawer} drawer={drawer} mobileDrawer={mobileDrawer} />
                            </HeaderInnerStyle>
                        )
                    }
                </Container>
            </HeaderStyle>
            <HeaderDrawer state={drawer} onClose={toggleDrawer} />
            <MobileDrawerMain state={mobileDrawer} onClose={toggleMobileDrawer} />
        </>
    )
}

HeaderSection.propTypes = {
    // children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default HeaderSection;