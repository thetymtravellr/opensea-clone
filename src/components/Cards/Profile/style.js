import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Link from "../../Link";

const Card = styled(Link)(({ theme }) =>(`
background-color: ${theme.palette.mode === "light" ? "rgb(255,255,255)" : "rgb(48, 51, 57)"};
box-shadow: rgb(0 0 0 / 4%) 0px 4px 8px;
transition: box-shadow 0.25s ease-in-out 0s;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
display:block;
&:hover{
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
}
`))

Card.Image= styled.div`
  position:relative;
  padding-bottom:56.25%;
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
    transform:scale(1);
    transition:transform 0.4s ease 0s;
    object-fit:cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`
Card.TextBody= styled.div(({ theme }) =>(`
display: block;

-webkit-box-align: center;
align-items: center;
overflow: hidden;
word-break: break-all;
text-overflow: ellipsis;
white-space: nowrap;
text-align: left;
margin-top:-35px;
padding: 16px 16px 20px;
@media(min-width:992px){
  padding: 16px;
  margin-top:-26px;
}
`))

Card.Profile= styled.div`
@media (min-width:992px){
 display:flex;
 align-items:center;
}
`
Card.ProfileImage= styled.div`
    --size:54px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 5px 10px;
    background-color: rgb(255, 255, 255);
    position: relative;
    width: var(--size);
    height: var(--size);
    min-width: var(--size);
    max-width: var(--size);
    min-height: var(--size);
    max-height: var(--size);
    border: 3px solid rgb(255, 255, 255);
    @media (min-width:992px){
      --size:74px;
      border: 4px solid rgb(255, 255, 255);
    }
    img{
      width:100%;
      border-radius: 10px;
    }
`
Card.ProfileBody= styled.div`
    font-weight:600;
    padding-left: 16px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`

Card.ProfileText= styled(Typography)(({ theme }) => (`
font-weight:600;
padding-top:10px;
color: ${theme.palette.black};
display: block;
margin: 0px;
overflow: hidden;
word-break: break-all;
text-overflow: ellipsis;
white-space: nowrap;
text-align: left;
@media (min-width:992px){
  padding-left:16px;
}
`))

export default Card;