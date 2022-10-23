import styled from "@emotion/styled";
import { Button, FormControl, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const FooterStyled = styled('footer')(({ theme }) => ({
    background: theme.palette.primary.dark,
    color: theme.palette.white.dark,
    padding: '40px 0 0'
}))

export const FooterContainer = styled(Box)(({ theme }) => (`
width: 95%;
margin: auto;
@media screen and (min-width: 992px){
    width: 90%;
}
`))

export const FooterRow = styled(Box)(({ theme }) => (`
display: flex;
align-items: flex-start;
flex-wrap: wrap;
padding-bottom: 40px;
border-bottom: 1px solid rgba(229, 232, 235, 0.25);
@media screen and (min-width: 1024px){
    align-items: flex-start;
}
&.footer-row {
    padding-top: 30px;
}
`));

export const FooterSubscribeFormContainer = styled(Box)`
width: 100%;
padding-right: 0px;
text-align: center;
margin-bottom: 20px;
@media screen and (min-width: 1200px){
    width: 50%;
    text-align: left;
    margin-bottom: 0;
    padding-right: 64px;
}
`

export const FooterSubscribeHeading = styled(Typography)`
    font-weight: 600;
    display: block;
    margin: 8px 0;
`
export const FooterSubscribeText = styled(Typography)`
font-weight: 400;
display: block;
`

export const FooterSubscribeForm = styled('form')`
display: flex;
align-items: flex-start;
width: 100%;
margin-top: 16px;
`

export const SubscribeFormInput = styled(FormControl)(({ theme }) => ({
    width: '100%',
    marginRight: '12px',
    input: {
    background: '#fff',
    color: 'rgb(4, 17, 29)',
    width: '100%',
    borderRadius: '12px',
    border: `2px solid ${theme.palette.common.white}`,
    padding: '12px',
    fontSize: '18px',
    height: '50px',
    [`&:focus`]: {
        outline: 'none',
        borderColor: `${theme.palette.gray.dark}`
    }
},
['& input::placeholder']:{
    fontSize: '20px'
}
}))

export const SubscribeButtonStyled = styled(Button)`
width: 162px;
display: inline-flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
border-radius: 12px;
-webkit-box-pack: center;
justify-content: center;
line-height: 22px;
letter-spacing: 0.01em;
padding: 12px 24px;
background-color: rgb(32, 129, 226);
border: 2px solid rgb(32, 129, 226);
color: rgb(255, 255, 255);
&:hover{
    filter: brightness(1.1);
    border: 2px solid rgba(0, 0, 0, 0);
    background-color: rgb(32, 129, 226);
}
`

export const FooterCommunitySection = styled(Box)`
padding-left: 0px;
padding-top: 20px;
width: 100%;
text-align: center;
@media screen and (min-width: 1200px){
    width: 50%;
    text-align: left;
    padding-left: 64px;
    padding-top: 0;
}
`

export const FooterTextStyled = styled(Box)`
width: 100%;
padding-top: 40px;
text-align: center;
@media screen and (min-width: 1024px){
    width: 25%;
    text-align: left;
}
`
export const Text = styled('p')`
`

export const FooterColumnContainer = styled(Box)`
width: 100%;
padding-top: 20px;
padding-left: 0;
display: flex;
justify-content: center;
flex-wrap: wrap;
height: fit-content;
text-align: center;
@media screen and (min-width: 815px){
    justify-content: space-around;
    text-align: left;
}
@media screen and (min-width: 1024px){
    width: 75%;
    padding-top: 40px;
    padding-left: 72px;
}
`

export const FooterLinkColumn = styled(Box)`
width: 50%;
height: 100%;
padding-top: 20px;
@media screen and (min-width:815px){
    width: 20%;
    padding-top: 0;
}
`

export const LinkColumnHeading = styled('h3')`
font-size: 16px;
font-weight: 600;
margin: 16px 0;
@media screen and (min-width: 815px){
    margin:0 0 18px;
}
`

export const LinkColumnList = styled('ul')`
list-style: none;
margin-bottom: 14px;
`

export const LinkColumnListItem = styled('li')`
margin-top: 10px
`

export const ColumnLinks = styled(Link)`
text-decoration: none;
color: #fff;
font-size: 14px;
&:hover{
    font-weight: 500;
}
`

export const FooterCopyrightBlock = styled(Box)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 12px;
padding: 40px 0;

@media screen and (min-width: 815px){
    flex-direction: row;
    justify-content: space-between;
}
`

export const CopyrightLinkContainer = styled('div')`
a{
    margin-top: 10px;
    font-size: 12px;
@media screen and (min-width: 815px){
    margin-left: 10px;
    margin-top: 0;
}
}
`