import styled from "@emotion/styled";
import { Skeleton, Typography } from "@mui/material";

const Card = styled.div`
    position:relative;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 16px;
    background: linear-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
    color:#fff;
    a{
        display:block;
        color:inherit;
    }
    .placeholder-image{
        width: 100%;
        height: 100%;
    }
    &:hover{   
        .card-image{
            img{
                transform:scale(1.1)
            }
        }
    }
`
Card.TextBody = styled.div`
    position: absolute;
    bottom: 0px;
    padding-bottom: 12px;
    z-index: 1;
    padding-left: 16px;
`
Card.Image = styled.div`

    padding-bottom:100%;
    img{
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
        z-index:-2;
        transform:scale(1);
        transition:transform 0.4s ease 0s;
    }
`
Card.Image.defaultProps = { className: 'card-image' }

Card.Title = styled(Typography)`
color:inherit;
font-weight:600;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
white-space: normal;
`
Card.Text = styled(Typography)`
color:inherit;
`
Card.Skeleton = styled(Skeleton)`
    margin: 0 10px
`
export default Card;