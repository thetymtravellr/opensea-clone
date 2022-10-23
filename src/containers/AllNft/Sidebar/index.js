import { Divider } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import AccordionSidebar from "~components/Accordions/Sidebar";
import PricingFilter from "~components/Filter/Pricing";
import Checkbox from "~components/Form/Checkbox";
import Radio from "~components/Form/Radio";
import { background, body, eyebrows, eyes, hat, mouth, nose, outfit, pet, rarity } from "../data";

const Sidebar = () => {
  return (<>
    <AccordionSidebar head={"Status"}
      content={<>
        <Checkbox label="Buy Now" />
        <Checkbox label="On Auction" />
      </>}
    />
    <AccordionSidebar head={"Price"}
      content={<>
        <PricingFilter mt="20px" />
      </>}
    />
    <AccordionSidebar head={"Quantity"}
      content={<RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group">
        <Radio value="all" label="All Items" />
        <Radio value="single" label="Single Items" />
        <Radio value="bundles" label="Bundles" />
      </RadioGroup>}
    />
    <AccordionSidebar head={"Currency"}
      content={<>
        <Checkbox label="AVAX" />
        <Checkbox label="WAVAX" />
      </>}
    />
    <Divider sx={{ marginTop: "20px", marginBottom: "10px" }} />
    <AccordionSidebar
      head={"Background"}
      search={true}
      length={background.length}
      content={<>
        {
          background.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Body"}
      search={true}
      length={body.length}
      content={<>
        {
          body.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Eyebrows"}
      search={true}
      length={eyebrows.length}
      content={<>
        {
          eyebrows.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Eyes"}
      search={true}
      length={eyes.length}
      content={<>
        {
          eyes.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Hat"}
      search={true}
      length={hat.length}
      content={<>
        {
          hat.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Mouth"}
      search={true}
      length={mouth.length}
      content={<>
        {
          mouth.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Nose"}
      search={true}
      length={nose.length}
      content={<>
        {
          nose.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Outfit"}
      search={true}
      length={outfit.length}
      content={<>
        {
          outfit.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Pet"}
      search={true}
      length={pet.length}
      content={<>
        {
          pet.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar
      head={"Rarity"}
      search={true}
      length={rarity.length}
      content={<>
        {
          rarity.map((el, i) => <Checkbox label={el} />)
        }
      </>}
    />
    <AccordionSidebar head={"Unrevealed"}
      content={<>
        <Checkbox label="true" />
      </>}
    />
  </>)
}

export default Sidebar