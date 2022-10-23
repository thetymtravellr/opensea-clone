import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const TitleContainerStyled = styled(Box)`
padding-top: 64px;
padding-bottom: 48px;

.MuiTypography-root {
    color: ${p => p.theme.palette.black}
}
`

const Title = ({ title }) => {
    return (
        <TitleContainerStyled>
            <Typography variant='2xl' as={'h1'}>
                {title}
            </Typography>
        </TitleContainerStyled>
    )
}

export default Title