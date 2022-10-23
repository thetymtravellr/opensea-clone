import styled from "@emotion/styled";

export const DropdownContainer = styled.div`
padding: 20px;
.MuiListItemText-primary {
    color: rgb(112,112,112);
    font-weight: 400;
}
.dropdown-menu {
    min-height: 240px;
    li {
        font-size: 15px;
    }
}
`

export const TableContainerStyled = styled.div`
@media screen and (max-width: 992px){
    overflow-x: scroll;
}
.table {
    @media screen and (max-width: 992px){
        min-width: 700px;
        width: 100%;
        font-size: 12px;  

        .MuiTypography-root {
        font-size: 12px;
        svg {
            width: 20px;
        }
        }

 
    }
    .row > div {
        justify-content: flex-start;
    }
  
}



`