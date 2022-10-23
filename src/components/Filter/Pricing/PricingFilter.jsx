import { PricingFilterStyled } from "./style"
import FilterDropdown from "../Dropdown/FilterDropdown"
import Input from "../../Form/Input"
import ButtonPrimary from "~components/Buttons/ButtonPrimary"
const filter = [
  "ETH",
  "USD",
  "SOL"
]
const PricingFilter = ({...rest}) => {
  return(
    <form action="">
      <PricingFilterStyled {...rest}>
        <FilterDropdown options={filter} className="dropdown" />
        <Input padding="0 12px" placeholder="Min" className="input"/>
        <span>to</span>
        <Input padding="0 12px" placeholder="Max" className="input"/>
      </PricingFilterStyled>
      <ButtonPrimary width={"100%"}>
        Apply
      </ButtonPrimary>
    </form>
   )
}

export default PricingFilter