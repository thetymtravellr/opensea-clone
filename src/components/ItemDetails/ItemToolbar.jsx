import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Tab } from '@mui/material';
import { RegulerTooltip } from '~components/Tooltip';
import { ItemToolbarStyled, ToolbarButton } from './style';

const ItemToolbar = ({children}) => {
  return (
    <ItemToolbarStyled>
      <>
      {children}
      </>
      <ToolbarButton>
      <RegulerTooltip title="More">
        <Tab icon={<MoreVertIcon />} value="more" />
      </RegulerTooltip>
    </ToolbarButton>
    </ItemToolbarStyled >
  )
}

export default ItemToolbar



/* 
const ItemToolbarStyled = styled(Tabs)`
    display:flex;
    background: red;
    width: fit-content;
    svg {
      width: 22px;
    }
  .tooltip-wrapper {
    width: 50px;
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
    margin-right: 0;
    padding: 11px;
    border: 2px solid ${p => p.theme.palette.border.dark};
    color: ${p => p.theme.palette.black};
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

*/