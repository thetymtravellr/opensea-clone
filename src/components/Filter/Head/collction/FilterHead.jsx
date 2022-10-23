import FilterListIcon from '@mui/icons-material/FilterList';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useMediaQuery } from '@mui/material';
import Box from "@mui/material/Box";
import { useContext, useState } from 'react';
import { GlobalContext } from 'src/context/GlobalContext';
import ButtonIconRound from "~components/Buttons/ButtonIconRound";
import ButtonOutlined from "~components/Buttons/ButtonOutlined";
import FilterDropdown from "~components/Filter/Dropdown";
import SearchAttribute from "~components/Search/Attribute";
import MobileFilterMenu from '../../MobileFilterMenu';
import ViewFilter from "../../View/ViewFilter";
import { data } from "./data/index";
import { ButtonContainer, FilterHeadContent, FilterHeadStyled } from "./style";
const FilterHead = ({ filterIcon, searchBar, dropdown, view, offer, shadow, sideOnly }) => {
  const matches = useMediaQuery('(min-width:992px)');
  const { filterOn, setFilterOn, setGridValue } = useContext(GlobalContext)
  const [active, setActive] = useState(false);
  const [content, setContent] = useState(undefined)

  return (<>
    <FilterHeadStyled shadow={shadow}>
      {
        sideOnly
        ? <FilterHeadContent>
        <Box className="sidebar-trigger">
          <ButtonIconRound tooltip={false} onClick={() => {
            setFilterOn(!filterOn)
            setGridValue(filterOn ? 3 : 4)
          }}>
            <FilterListIcon />
          </ButtonIconRound>
        </Box>
      </FilterHeadContent>
      :  <>
      {
        filterIcon && (matches
          && <Box className="sidebar-trigger">
            <ButtonIconRound tooltip={false} onClick={() => {
              setFilterOn(!filterOn)
              setGridValue(filterOn ? 3 : 4)
            }}>
              <FilterListIcon />
            </ButtonIconRound>
          </Box>)
      }
      {
        searchBar && <Box className="filter-head-search">
          <SearchAttribute />
        </Box>
      }
      {
        dropdown && (matches
          /* FILTER DROPDOWN ON LARGE SCREEN */
          ? <Box className="filter-head-sort">
            <FilterDropdown labelProps={{ spacing: "30px" }} dropdownProps={{ minHeight: 350 }} options={data} />
          </Box>
          /* FILTER AND SORT BUTTON ON REST OF THE SCREEN */
          : <ButtonContainer>
            <ButtonOutlined color="#000" width="100%" onClick={() => {
              setContent('filters')
              setActive(true)
            }}>
              <FilterListIcon /> &nbsp; Filters
            </ButtonOutlined>
            <ButtonOutlined color="#000" width="100%" onClick={() => {
              setContent('sort')
              setActive(true)
            }}>
              <ImportExportIcon /> &nbsp; Sort
            </ButtonOutlined>
          </ButtonContainer>)
      }
      {
        view && (
          matches && <Box className="filter-view-switch">
            <ViewFilter />
          </Box>
        )
      }
      {
        offer && <Box className="filter-offer-button">
          <ButtonOutlined width={matches ? "auto" : "100%"}>
            Make collection offer
          </ButtonOutlined>
        </Box>
      }
      {
        !matches && <MobileFilterMenu active={active} setActive={setActive} content={content} />
      }
    </>
      }
     
    </FilterHeadStyled>
  </>
  )
}

export default FilterHead



