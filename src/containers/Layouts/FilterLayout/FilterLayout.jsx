
import { Container, Toolbar } from "@mui/material";
import { useContext, useEffect } from "react";
import { GlobalContext } from "src/context/GlobalContext";
import { FilterSidebarStyled, FilterWrapperStyled } from "./style";
export const FilterLayout = ({ head, sidebar, children }) => {
  const { filterOn, setFilterOn, matches } = useContext(GlobalContext)

  useEffect(() => {
    if (matches) {
      setFilterOn(true)
    } else {
      setFilterOn(false)
    }
  }, [matches])

  return (
    <>
      {head}
    <Container>
      <FilterWrapperStyled>
        {
          filterOn && <FilterSidebarStyled>
            {sidebar}
          </FilterSidebarStyled>
        }
        <>
          {children}
        </>
        {/* <FilterBody /> */}
      </FilterWrapperStyled>
    </Container>
    </>
  )
}

export default FilterLayout;