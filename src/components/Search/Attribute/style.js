import styled from "@emotion/styled";

export const Label = styled('label')({
  display: 'block',
});
export const Wrapper = styled('label')(`

  position:relative;
  .search-icon{
    position:absolute;
    top:0;
    left:0;
    width:45px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 24px !important;
    text-rendering: optimizelegibility;
    color: rgb(112, 122, 131);
    font-feature-settings: "liga" !important;
  }

`);

 export const Input = styled('input')(({ theme }) => (`
 background: ${theme.palette.background.default};
  cursor: text;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid ${theme.palette.border.dark};
  color: ${theme.palette.black};
  width: 100%;
  padding: 12px 12px 12px 45px;
  height: 48px;
  font-size: 16px;

  &:focus{
    border:2px solid rgb(138, 147, 155);
    box-shadow:none;
    outline:none;
  }

  `));

 export const Listbox = styled('ul')(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.default,
  overflowY: 'auto',
  maxHeight: 220,
  minHeight: 350,
  boxShadow:"rgb(0 0 0 / 16%) 0px 4px 16px",
  overflowY: "auto",
  boxShadow: "rgb(0 0 0 / 16%) 0px 4px 16px",
  // backgroundColor: "rgb(255, 255, 255)",
  color: theme.palette.black,
  '& li': {
    // backgroundColor: '#4a8df6',
    
    "&.wrapper":{
      color: 'rgb(138, 147, 155)',
      // cursor: 'pointer',
      borderBottom: "1px solid rgb(229, 232, 235)",
      position: "sticky",
      display:"flex",
      justifyContent:"space-between",
      top: "0px",
      backgroundColor: "inherit",
      padding: "16px",
      fontWeight: "600",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    "&.item":{
      padding: "8px 16px",
      "p":{
          display:"flex",
          justifyContent:"space-between"
      },
      "&:hover":{
        trasnsition:"all 0.2s ease 0s",
        boxShadow:"rgb(4 17 29 / 25%) 0px 0px 8px 0px"
      }
    }
  },
  '& li.Mui-focused': {
    // backgroundColor: '#4a8df6',
    // color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    // backgroundColor: '#2977f5',
    // color: 'white',
  },
}));