import styled from "@emotion/styled";

export const StyledList = styled.div`
  display:flex;
  align-items:center;
  overflow-x:auto;
  margin:0 -20px;
`
export const Border = styled("div")(({theme, mb})=>(
  `
  border-width: 0.5px 0 0 0;
  border-style: solid;
  border-color: rgba(229, 232, 235, 0.5);
  margin-bottom: ${mb ? mb : "30px"};
`))

StyledList.Item = styled("a")(({theme,active})=>{
  return(`
    padding: 12px 0;
    margin-left:20px;
    margin-right:20px;
    white-space: nowrap;
    font-size:${theme.typography["2xs"].fontSize}px;
    cursor:pointer;
    font-weight:600;
    ${active ? `color: ${theme.palette.black};border-bottom:1px solid rgb(4, 17, 29)` : `color: rgb(112, 122, 131)`};

  `)})