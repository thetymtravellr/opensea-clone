import styled from "@emotion/styled";

const CardStyled = styled.div`
    background-color: rgba(21, 178, 229, 0.06);
    border-radius: 6px;
    border: 1px solid rgb(21, 178, 229);
    padding: 10px;
    text-align: center;
    width: 100%;
`
CardStyled.TitleTop = styled.span`
    color: rgb(21, 178, 229);
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
`

CardStyled.Title = styled.h4`
    color: rgb(53, 56, 64);
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

CardStyled.Text = styled.p`
    color: rgb(112, 122, 131);
    font-size: 13px;
    line-height: 16px;
    min-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export default CardStyled;