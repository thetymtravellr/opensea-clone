import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const TextStyled = styled(Typography)`
span:first-of-type {
    font-size: 16px;
}
`

const Description = () => {
    return (
        <TextStyled variant="2xs">
            <span>
                By <strong>njdlab.eth</strong>
            </span>
            <br />
            <span>
                AlphaBlocks is an exclusive project with 555 supply that gives you access to a Node, Tool, tons of valuable WLs and a Game, for free.
            </span>
        </TextStyled>
    )
}

export default Description