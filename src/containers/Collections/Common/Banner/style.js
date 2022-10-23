import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const BannerBox = styled(Box)`
padding-bottom: 25%;
width: 100%;
position:relative;
img {
    height: 100%;
    width: 100%;
    object-fit:cover;
    object-position:center;
    position:absolute;
    inset:0;
}
`
