import styled from "@emotion/styled";
import Link from "../../../Link";

export const ListStyled = styled('ul')`
  list-style: none;
  margin-bottom: 14px;
`

export const ListStyledItem = styled('li')`
  margin-top: 10px
`

export const ListStyledLinks = styled(Link)`
text-decoration: none;
color: #fff;
font-size: 14px;
&:hover{
    font-weight: 500;
}
`