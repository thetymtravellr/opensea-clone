import { Container, useScrollTrigger } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import Logo from "../Logo/Logo";
import HeaderDrawer from "./components/Drawer/index";
import HeaderMenu from "./components/Menu/Menu";
import HeaderSearch from "./components/Search/HeaderSearch";
import { HeaderInnerStyle, HeaderLogoStyle, HeaderStyle } from "./style";
const HeaderInnerSection = ({ window, bg,textColor, ...rest}) => {
    const [drawer, setDrawer] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(open);
    };

    const scrolling = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 25,
    });

    return (
        <>
            <HeaderStyle active={scrolling || drawer || bg} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, }} bg={bg} textColor={textColor}>
                <Container>
                    <HeaderInnerStyle>
                        <HeaderLogoStyle>
                            <Logo />
                        </HeaderLogoStyle>
                        <HeaderSearch className="header-search"/>
                        <HeaderMenu toggleDrawer={toggleDrawer} drawer={drawer} />
                    </HeaderInnerStyle>
                </Container>
            </HeaderStyle>
            <HeaderDrawer state={drawer} onClose={toggleDrawer} />
        </>
    )
}

HeaderInnerSection.propTypes = {
    // children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default HeaderInnerSection;