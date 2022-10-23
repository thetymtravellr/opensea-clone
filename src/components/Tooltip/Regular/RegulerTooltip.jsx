import styled from "@emotion/styled"
import { Box, Button, Tooltip } from "@mui/material"
import { TooltipStyled } from "./style"

const TooltipStyledWrapper = styled(Box)`
margin-right: 5px;
.MuiButtonBase-root {
color: #000;
font-weight: 400;
border: none;
background: none;
    &:hover {
        background: none;
    }
}
`

const RegulerTooltip = ({ children, title }) => {
    return (
        <TooltipStyledWrapper className="tooltip-wrapper">
            <TooltipStyled title={title} placement="top" arrow >
                    <span className="tooltip-inner">{children}</span>
            </TooltipStyled>
        </TooltipStyledWrapper>
    )
}

export default RegulerTooltip