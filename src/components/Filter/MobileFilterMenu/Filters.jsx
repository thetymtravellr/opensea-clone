import { RadioGroup } from '@mui/material'
import AccordionSidebar from '~components/Accordions/Sidebar/AccordionSidebar'
import Checkbox from '~components/Form/Checkbox'
import Radio from '~components/Form/Radio'
import PricingFilter from '../Pricing/PricingFilter'

const Filters = () => {
    return (
        <>
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
        </>
    )
}

export default Filters