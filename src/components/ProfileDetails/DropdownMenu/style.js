import styled from "@emotion/styled";
import Menu from '@mui/material/Menu';
export const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    maxHeight: "350px",
    maxWidth: "calc(100vw - 10px)",
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 220,
    
    boxShadow:'rgb(0 0 0 / 16%) 0px 4px 16px',
    background:theme.palette.mode === 'light'?"rgb(255, 255, 255)":"rgb(48, 51, 57)",
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      paddingTop:13,
      paddingBottom:13,
      paddingLeft:16,
      paddingRight:16,
      fontSize: 14,
      fontWeight:500,
      fontFamily:'"Poppins", sans-serif',
      color:theme.palette.mode === 'light' ?  'rgb(55, 65, 81)': "rgb(251, 253, 255)",
      '&.border:not(:last-of-type)':{
        borderBottom:`1px solid ${theme.palette.mode === "light" ? "rgb(229, 232, 235)":"rgb(53, 56, 64)"}`
      },
      '&.title':{
        fontSize: 12,
        textTransform:"uppercase",
        color: theme.palette.mode === "light" ? "rgb(112, 122, 131)":"rgb(138, 147, 155)"
      },
      ".subtext":{
        fontWeight: 600,
        fontSize: 14,
        color: theme.palette.mode === "light" ? "rgb(112, 122, 131)":"rgb(138, 147, 155)"
      },
      "span":{
        display:"block"
      },
      '& .MuiSvgIcon-root,& svg': {
        color: theme.palette.mode === 'light' ? "rgb(38, 43, 47)":"rgb(251, 253, 255)",
        marginRight: theme.spacing(1.5),
        fill: "currentColor"
      },
      '&:active,&:hover': {
        backgroundColor:theme.palette.mode === 'light' ? "rgb(251, 253, 255)":"rgb(38, 43, 47)",
      }
    },
  },
}));