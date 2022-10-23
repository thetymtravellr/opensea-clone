import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
    box-shadow: none;
    transition:.4s;
    @media (max-width:767px){
        position:relative;
    }
    ${p => p.active && `
        background:#fff;
        box-shadow:rgb(229 232 235) 0px 1px 0px 0px;
        .search-input{
            border:2px solid rgb(229, 232, 235);
        }
    `}
`

export const HeaderLogoStyle = styled.div`
    padding-right: 48px;
`

export const HeaderInnerStyle = styled.div`
    display:flex;
    align-items:center;
`

export const HeaderSearchStyle = styled.div`
    width: 100%;
`



