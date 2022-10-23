import styled from '@emotion/styled';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { useContext } from 'react';
import { GlobalContext } from '~context/GlobalContext';

const ModeButtonStyled = styled('li')(({ theme, gap }) => (`
width: 100%;
    display: flex;
    justify-content: space-between;

    .MuiBox-root {
        display: flex;
        align-items: center;
    }

`))

const LinkImage = styled.div`
width: 24px;
height: 24px;
margin-right: 12px;
img {
    width: 24px;
}
`

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 48,
    height: 24,
    padding: 0,
    margin: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 3,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(24px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgb(24, 104, 183)' : 'rgb(24, 104, 183)',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 18,
        height: 18,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? 'rgb(76, 80, 92)' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const ThemeModeButton = () => {
    const { mode, setMode } = useContext(GlobalContext);
    return (
        <ModeButtonStyled gap="20px">
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
        </ModeButtonStyled>
    )
}

export default ThemeModeButton