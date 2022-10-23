import styled from "@emotion/styled";

export const DrawerStyled = styled("div")(({ theme }) => ({
    zIndex: 1,
    fontSize: 16,
    '.MuiPaper-root': {
        width: '420px',
        boxShadow: 'none',
        filter: 'drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);',
        background: theme.palette.mode === "light" ? "rgb(255,255,255)" : "rgb(38,43,47)",
    },

}))

export const MobileDrawerStyled = styled("div")(({ theme }) => ({
    zIndex: 999,
    fontSize: 16,
    '.MuiPaper-root': {
        width: '100%',
        background: `${theme.palette.common.white}`,
        boxShadow: 'none',
        filter: 'drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);'
    },
}))

export const ListTextStyled = styled('p')(({ theme }) => (`
border-top: 1px solid ${theme.palette.gray.light};
padding: 20px 20px 0;
font-size: 16px;
font-weight: 400;
a{
    font-size: 16px;
    text-decoration: none;
    font-weight: 700;
}
`))

export const NewDrawerContainer = styled.div`
.MuiPaper-root {
    background: blue;
}
`

export const NewDrawerStyled = styled("div")(({ theme }) => ({
    zIndex: 1,
    fontSize: 16,
    '.MuiPaper-root': {
        paddingTop: '70px',
        width: '420px',
        boxShadow: 'none',
        filter: 'drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);',
        background: '#2081E2',

        '@media (max-width: 420px)': {
            width: '100%',
        }
    },

}))

export const DrawerContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

.search {
    margin-top: -5px;

    .search-box {
        padding: 0 10px 0 30px;
        min-height: 60px;
        background: #1868B7;
    }
    
    svg {
        fill: #fff;
        width: 25px;
        height: 25px;
        display: flex;
    }

    input {
        background: none;
        border: none;
        color: #fff;
        outline: none;
        font-size: 16px;

        &::placeholder {
            color: #fff;
        }
    }
}

ul {
    list-style: none;
    text-align: center;
}
.links {
    
    a {
        font-size: 24px;
        font-weight: 600;
        padding: 10px;
        color: #fff;
    }
}

.social-links-drawer {
    display: flex;
    justify-content: center;
    
    a {
        padding: 15px;

        svg {
            width: 35px;
            height: 35px;
            fill: #fff;
        }
    }

}
`