import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useState } from 'react';
import Link from "~components/Link";
import Logo from '~components/Logo';
import SuperTag from "~components/SuperTag";
import NewDrawer from './components/Drawer/NewDrawer/NewDrawer';
import { NewDrawerContainer } from './components/Drawer/style';
import { MenuSocialStyle } from "./components/Menu/style";
import { social } from "./data/data";
import { HeaderContents, HeaderInnerStyle, HeaderStyle, NewHeader, NewHeaderLink } from "./style";

const data = [
    'Guides',
    'Guest posts',
    'Spotlights',
    'Safety & Security',
    'Announcements',
]

const HeaderNew = ({ bg }) => {
    const matches = useMediaQuery('(min-width:1200px)');
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = (open) => {
        setDrawer(open);
       
    };

    return (
        <>
            <HeaderStyle active={bg} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, }} bg={true} matches={matches} className="header" shadow={true}>
                <NewHeader>
                    <HeaderInnerStyle className="header-inner">
                        <Box>
                            <NewHeaderLink as={Link} href="/blog">
                                <Logo />
                                <Typography variant='sm'>
                                    Blog
                                </Typography>
                            </NewHeaderLink>
                        </Box>
                        {
                            matches ?
                                <>
                                    <HeaderContents>
                                        {
                                            data.map((item, index) => (<li>
                                                <Link href="/">{item}</Link>
                                            </li>))
                                        }

                                    </HeaderContents>
                                    <MenuSocialStyle className="social-icons">
                                        {
                                            social.map((el, i) => (
                                                <li>
                                                    <Link href="/" className="social-links">
                                                        <SuperTag value={el.icon} />
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </MenuSocialStyle>
                                </>
                                : <Button sx={{color: (theme) => theme.palette.black}} onClick={() => {
                                    toggleDrawer(!drawer)
                                }}><MenuIcon /></Button>
                        }
                    </HeaderInnerStyle>
                </NewHeader>
            </HeaderStyle>
            <NewDrawerContainer>
            <NewDrawer data={data} social={social} state={drawer} onClose={toggleDrawer} />
            </NewDrawerContainer>
        </>
    )
}

export default HeaderNew