import styled from "@emotion/styled";

const DetailsStyled = styled.div`
`

DetailsStyled.Item = styled.div`
    margin-top:8px; 
    display:flex;
    justify-content: space-between;
    font-size: 14px;
  
    .right-text{
        font-weight: 500;
        margin: 0px;
        max-width: 365px;
        text-align: right;
        color: rgb(112, 122, 131);
    }
    .with-icon-tooltip{
        display:flex;
        align-items:center;
        svg{
            font-size:14px;
            color:rgb(138, 147, 155);
        }
        .tooltip-inner{
            display:flex;
            cursor:pointer;
            margin-left:6px;
        }
    }
    a{
        color:rgb(32, 129, 226)!important;
    }
}
`


export default DetailsStyled;