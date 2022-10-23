import { Box } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import AccordionSidebar from "~components/Accordions/Sidebar";
import PricingFilter from "~components/Filter/Pricing";
import Checkbox from "~components/Form/Checkbox";
import Radio from "~components/Form/Radio";

const Sidebar = ({ head, checkbox, checkboxLabel }) => {
  return (<>
  <Box style={{ marginTop: "10px"}}>
  <AccordionSidebar head={"Event Type"}
      content={<>
        <Checkbox label="Sales" />
        <Checkbox label="Listings" />
        <Checkbox label="Offers" />
        <Checkbox label="Collection offers" />
        <Checkbox label="Transfers" />
      </>}
    />
    <AccordionSidebar head={"Collections"}
      content={<>
        <PricingFilter mt="20px" />
      </>}
    />
    <AccordionSidebar head={"Chains"}
      content={<RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group">
        <Radio value="all" label="All Items" />
        <Radio value="single" label="Single Items" />
        <Radio value="bundles" label="Bundles" />
      </RadioGroup>}
    />
  </Box>
  </>)
}
export default Sidebar