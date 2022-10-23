import { useContext } from "react";
import { GlobalContext } from "src/context/GlobalContext";
import { Border, StyledList } from "./style";

const FilterList = ({ listArray, ...props }) => {
  const { active, setActive } = useContext(GlobalContext)
  const handleClick = (index) => {
    setActive(index)
  }

  return (<><StyledList>
    {listArray.map((item, index) => {
      return <StyledList.Item key={index} onClick={() => handleClick(index)} active={active === index}>
        {item.label}
      </StyledList.Item>
    })}
  </StyledList>
    <Border {...props} />
  </>)
}

export default FilterList