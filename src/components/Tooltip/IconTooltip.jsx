import styled from "@emotion/styled"
import { Tooltip } from "@mui/material"

const TooltipStyled = styled(Tooltip)`
width: 10px;
margin-right: 5px;
img {
    max-width: 100%;
    width: 100%;
}
`

const IconTooltip = ({ icon, title }) => {
    return (
        <TooltipStyled title="ETH" placement="top" arrow sx={{ padding: '20px' }}>
            <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="" />
        </TooltipStyled>
    )
}

export default IconTooltip