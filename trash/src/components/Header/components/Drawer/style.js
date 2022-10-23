import styled from "@emotion/styled";

export const DrawerStyled = styled("div")(({ theme }) => ({
    '.MuiPaper-root':{
        width: '400px',
        background: `${theme.palette.common.white}`,
        boxShadow: 'none',
        filter: 'drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);'
    },
}))

export const ListTextStyled = styled('p')(({ theme }) => (`
border-top: 1px solid ${theme.palette.gray.light};
padding: 20px 20px 0;
a{
    text-decoration: none;
    font-weight: 700;
}
`))