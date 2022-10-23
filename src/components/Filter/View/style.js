import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";

export const TabStyled = styled(Tabs)`
  display:flex;
  width: fit-content;
  .MuiButtonBase-root{
    min-width:auto;
    display: inline-flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    height: 48px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.01em;
    padding: 17px;
    border: 2px solid ${p => p.theme.palette.border.dark};
    color:rgb(112, 122, 131);
    &.Mui-selected{
      color: ${p => p.theme.palette.black};
      background: ${p => p.theme.palette.mode === "light" ? "rgba(229, 232, 235, 0.5)" : "rgb(53,56,64)"};
    }
    &:first-of-type{
      border-top-left-radius:12px;
      border-bottom-left-radius:12px;
    }
    &:last-of-type{
      border-top-right-radius:12px;
      border-bottom-right-radius:12px;
    }
    &:not(:first-of-type){
      margin-left: -2px;
    }
  }
  .MuiTabs-indicator{
    display:none;
  }

`