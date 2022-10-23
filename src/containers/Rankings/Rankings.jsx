import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { useContext, useState } from 'react'
import { GlobalContext } from 'src/context/GlobalContext'
import FilterDropdown from '~components/Filter/Dropdown/FilterDropdown'
import FilterList from '~components/FilterList'
import SuperTag from '~components/SuperTag'
import Title from '~components/Title'
import { RegulerTooltip } from '~components/Tooltip'
import { TrendingItemsContainer } from '~containers/TrendingAndTop/style'
import { category, filters, toggleDataLeft, toggleDataLeftText, toggleDataRight } from "./data/index"
import StatsTable from './StatsTable'
import { FilterLeft, FilterRight, FiltersContainer, ToggleContainer } from './style'

const Stats = () => {
  const [filterLeft, setSetFilterLeft] = useState('all_chains');
  const [filterRight, setSetFilterRight] = useState('1h');
  const { active, setActive, matches } = useContext(GlobalContext)

  const handleChangeLeft = (event, newData) => {
    setSetFilterLeft(newData);
  };

  const handleChangeRight = (event, newData) => {
    setSetFilterRight(newData);
  };

  const controlLeft = {
    value: filterLeft,
    onChange: handleChangeLeft,
    exclusive: true,
  };
  const controlRight = {
    value: filterRight,
    onChange: handleChangeRight,
    exclusive: true,
  };

  return (
    <Container>
      <Title title="Collection stats" />
      <FilterList listArray={filters} mb="16px" />
      <FiltersContainer>
        <FilterLeft>
          <FilterDropdown options={category} index={0} />
          {
            matches
            ? <ToggleContainer>
            <ToggleButtonGroup size="small" {...controlLeft} aria-label="Large sizes">
              {
                toggleDataLeft.map((el, i) => (
                  <ToggleButton value={el.value}>
                    <RegulerTooltip key={el.value} title={el.value} arrow placement='top'>
                  
                        {
                          i === 0
                            ? <Typography variant='base' sx={{ textTransform: "capitalize" }}>{el.label}</Typography>
                            : <SuperTag value={el.label} />
                        }
                    
                    </RegulerTooltip>
                  </ToggleButton>
                ))
              }
            </ToggleButtonGroup>
          </ToggleContainer>
          : <FilterDropdown options={toggleDataLeftText} index={0} />
          }
        </FilterLeft>
        <FilterRight>
          {
            matches
            ? filters[active]?.label === "Top" && <ToggleContainer>
            <ToggleButtonGroup size="small" {...controlRight} aria-label="Large sizes">
              {
                toggleDataRight.map((el, i) => (
                  <ToggleButton key={i * 0.0001} value={el}>
                    <div>
                      <Typography variant='base'>
                        {el}
                      </Typography>
                    </div>
                  </ToggleButton>
                ))
              }
            </ToggleButtonGroup>
          </ToggleContainer>
          : <FilterDropdown options={toggleDataRight} index={0} />
          }
        </FilterRight>
      </FiltersContainer>
      <Box>
        <TrendingItemsContainer>
          {/* <CollectionTable data={users} listPos={1} active={active} /> */}
          <StatsTable />
        </TrendingItemsContainer>
      </Box>
    </Container>
  )
}

export default Stats