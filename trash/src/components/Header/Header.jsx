import { AppBar, Container, useScrollTrigger } from "@mui/material";
import { useState } from "react";
import Logo from "../Logo/Logo";
import PropTypes from 'prop-types';
import HeaderDrawer from "./components/Drawer/index";
import HeaderMenu from "./components/Menu/Menu";
import HeaderSearch from "./components/Search/HeaderSearch";
import { HeaderInnerStyle, HeaderLogoStyle, HeaderStyle } from "./style";
const HeaderSection = (props) => {
    const { children, window } = props;
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
        threshold: 100,
      });
    return (
        <>
            <HeaderStyle  active={scrolling || drawer} as={AppBar} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: drawer ? 'white' : 'transparent'  }}>
                <Container>
                    <HeaderInnerStyle>
                        <HeaderLogoStyle>
                            <Logo />
                        </HeaderLogoStyle>
                        <HeaderSearch/>
                        <HeaderMenu toggleDrawer={toggleDrawer} drawer={drawer}/>
                    </HeaderInnerStyle>
                </Container>
            </HeaderStyle>
            <HeaderDrawer state={drawer} onClose={toggleDrawer} />
        </>
    )
}

HeaderSection.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
export default HeaderSection;