import styled from "@emotion/styled";
import { Skeleton, Typography } from "@mui/material";

const Card = styled.div`
    position:relative;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 8px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    color:#fff;
    a{
        display:block;
        color:inherit;
    }
    .placeholder-image{
        width: 100%;
        height: 100%;
    }
`
Card.TextBody = styled.div`
    // position: absolute;
    // bottom: 0px;
    // padding-bottom: 12px;
    // z-index: 1;
    // padding-left: 16px;
    padding: 15px;
    min-height:40px;
    text-align:center;
`

Card.Image = styled.div`
    border-top-left-radius:inherit;
    border-top-right-radius:inherit;
    padding-bottom:55%;
    position:relative;
    img{
        border-top-left-radius:inherit;
        border-top-right-radius:inherit;
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin: auto;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit:cover
        transition:transform 0.4s ease 0s;
    }
`
Card.Image.defaultProps = { className: 'card-image' }

Card.Text = styled(Typography)`
    font-weight: 600;
    font-size: 20px;
    color: rgb(4, 17, 29);
`
export default Card;