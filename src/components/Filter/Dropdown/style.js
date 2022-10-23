import styled from '@emotion/styled';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';

export const ListStyled = styled(List)(({ theme, spacing }) => (

  `
  background: ${theme.palette.background.default};
  .MuiListItemText-primary {
    color: ${theme.palette.black};
    font-weight: 600;
    font-size: 12px;
    @media screen and (min-width: 992px){
      font-size: 16px;
    }
  },
  width: 100%;
  height: 48px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  position:relative
  .dropdown-menu{
   
    box-shadow:rgb(0 0 0 / 16%) 0px 4px 16px;
    width:500px;
  }
  .dropdown-label{
    border-radius: 12px;
    border: 2px solid ${theme.palette.border.dark};
    display:flex;
    justify-content:space-between;
    height: 48px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    padding-right: ${spacing ? spacing : "20px"};
    padding-left: ${spacing ? spacing : "24px"};
    &:hover{
      background:unset;
    }
  }
  `
))
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
))(({ theme, spacing }) => ({
  '& .MuiPaper-root': {
    maxHeight: "350px",
    maxWidth: "calc(100vw - 10px)",
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 220,

    boxShadow: 'rgb(0 0 0 / 16%) 0px 4px 16px',
    background: theme.palette.mode === 'light' ? "rgb(255, 255, 255)" : "rgb(48, 51, 57)",

    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      paddingTop: 13,
      paddingBottom: 13,
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: 14,
      fontWeight: 500,
      fontFamily: '"Poppins", sans-serif',
      color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : "rgb(251, 253, 255)",
      '&.border:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.mode === "light" ? "rgb(229, 232, 235)" : "rgb(53, 56, 64)"}`
      },
    },
  }
}))

export const Listbox = styled('ul')(({ theme, open, minHeight }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflowY: 'auto',
  maxHeight: 220,
  minHeight: minHeight,
  boxShadow: "rgb(0 0 0 / 16%) 0px 4px 16px",
  overflowY: "auto",
  boxShadow: "rgb(0 0 0 / 16%) 0px 4px 16px",
  backgroundColor: theme.palette.mode === "light" ? "rgb(255,255,255)" : "rgb(53, 56, 64)",
  color: theme.palette.black,
  display: open ? "block" : "none",
  borderRadius: "10px",
  
  '& li': {
    // backgroundColor: '#4a8df6',
    fontSize: "12px",
    fontWeight: "600",
    padding: "12px 16px",
    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${theme.palette.border.main}`
    },
    "&:hover": {
      trasnsition: "all 0.2s ease 0s",
      boxShadow: "rgb(4 17 29 / 25%) 0px 0px 2px 0px"
    }
  },
  '& li.Mui-focused': {
    // backgroundColor: '#4a8df6',
    // color: 'white',
    cursor: 'pointer',
  },
}));

