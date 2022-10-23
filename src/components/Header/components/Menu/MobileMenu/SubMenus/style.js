import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CloseButton = styled(Button)`
        width: 100%;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        height: 72px;
        -webkit-box-pack: justify;
        justify-content: flex-start;
        font-weight: 600;
        font-size: 16px;
        flex-shrink: 0;
        padding: 0px 10px;
        color: rgba(4, 17, 29, 0.75);
        border-bottom: 1px solid rgb(229, 232, 235);
        svg {
            fill: rgba(4, 17, 29, 0.75);
        }
`