import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GridOnIcon from '@mui/icons-material/GridOn';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, FormControlLabel } from '@mui/material';
import { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalContext';
import { DropdownButtonStyled, IconMenuDropdownStyle, IOSSwitch, LinkImage, LinkStyled, MenuDropdownItemStyle, MenuDropdownStyle } from './style';

const IconMenuDropdown = () => {
    const { mode, setMode } = useContext(GlobalContext);
    return (
        <IconMenuDropdownStyle>
            <MenuDropdownStyle right="0">
                <MenuDropdownItemStyle>
                    <LinkStyled href="/">
                        <LinkImage as={"span"}>
                            <PersonIcon />
                        </LinkImage>
                        <span>Profile</span>
                    </LinkStyled>
                </MenuDropdownItemStyle>
                <MenuDropdownItemStyle>
                    <LinkStyled href="/">
                        <LinkImage as={"span"}>
                            <FavoriteBorderIcon />
                        </LinkImage>
                        <span>Favorites</span>
                    </LinkStyled>
                </MenuDropdownItemStyle>
                <MenuDropdownItemStyle>
                    <LinkStyled href="/">
                        <LinkImage as={"span"}>
                            <RemoveRedEyeIcon />
                        </LinkImage>
                        <span>Watchlist</span>
                    </LinkStyled>
                </MenuDropdownItemStyle>
                <MenuDropdownItemStyle>
                    <LinkStyled href="/">
                        <LinkImage as={"span"}>
                            <GridOnIcon />
                        </LinkImage>
                        <span>My Collections</span>
                    </LinkStyled>
                </MenuDropdownItemStyle>
                <MenuDropdownItemStyle>
                    <LinkStyled href="/">
                        <LinkImage as={"span"}>
                            <SettingsIcon />
                        </LinkImage>
                        <span>Settings</span>
                    </LinkStyled>
                </MenuDropdownItemStyle>

                <MenuDropdownItemStyle>
                    <DropdownButtonStyled gap="20px">
                        <Box>
                            <LinkImage as={"span"}>
                                <ModeNightIcon />
                            </LinkImage>
                            <span>Night Mode</span>
                        </Box>
                        <Box>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} />}
                                onClick={() => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))}
                            />
                        </Box>
                    </DropdownButtonStyled>
                </MenuDropdownItemStyle>

            </MenuDropdownStyle>
        </IconMenuDropdownStyle>
    )
}

export default IconMenuDropdown