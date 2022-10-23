import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import { Tab } from "@mui/material";
import { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalContext';
import { TabStyled } from "./style";
const ViewFilter = () => {
  const { value,setValue, setGridValue, filterOn } = useContext(GlobalContext)

  const handleChange = (event, newValue) => {
    if (filterOn && newValue === 0) {
      setGridValue(4)
    }
    if (filterOn && newValue === 1) {
      setGridValue(2)
    }
    if (filterOn && newValue === 2) {
      setGridValue(4)
    }
    if (!filterOn && newValue === 0) {
      setGridValue(3)
    }
    if (!filterOn && newValue === 1) {
      setGridValue(2)
    }
    if (!filterOn && newValue === 2) {
      setGridValue(3)
    }
    setValue(newValue)
  };

  return (
    <TabStyled value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<WindowOutlinedIcon />} aria-label="grid" />
      <Tab icon={<GridOnOutlinedIcon />} aria-label="six" />
      <Tab icon={<AutoAwesomeMosaicOutlinedIcon />} aria-label="person" />
    </TabStyled>
  );
}

export default ViewFilter

