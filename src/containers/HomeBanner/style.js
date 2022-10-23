import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const HomeBannerStyle = styled("div")((props) =>(`
    background-position: 50% 50%;
    background-size: cover;
    padding-top: 122px;
    padding-bottom: 45px;
    background-image: url(${props.background.default});
    @media (min-width:600px){
        background-image: url(${props.background.sm});
    }
`))

export const HomeBannerTitle = styled(Typography)(({ theme }) => (`
font-weight:700;
text-align:center;
color: ${theme.palette.black};
`))


