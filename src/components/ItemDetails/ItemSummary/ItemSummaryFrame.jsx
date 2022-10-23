import BallotIcon from '@mui/icons-material/Ballot';
import LabelIcon from '@mui/icons-material/Label';
import SubjectIcon from '@mui/icons-material/Subject';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import { useState } from "react";
import AccordionRegular from "~components/Accordions/Regular/AccordionRegular";
import { Description, Details, PropertiesContent } from './AccordionItems';
import About from './AccordionItems/About';
import { AccordionGroup, SummaryFrameStyled } from "./style";

const ItemSummaryFrame = () => {
    const [expanded, setExpanded] = useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <SummaryFrameStyled>
            <AccordionGroup mb="23px">
                <AccordionRegular head={<><SubjectIcon/>Description</>}
                    text={<><Description /></>}
                    expanded={true}
                    // onChange={handleChange('panel1')}
                    className="item-accordion text-accordion"
                    alwaysOpen={true}
                />
                <AccordionRegular head={<><VerticalSplitIcon/>About</>}
                    text={<><About /></>}
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    className="item-accordion text-accordion"
                />
                <AccordionRegular head={<><LabelIcon/>Properties</>}
                    text={<><PropertiesContent /></>}
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    className="item-accordion property-accordion"
                />
                {/* <AccordionRegular head={<><BallotIcon/>Badged Collection</>}
                    text={<><Description /></>}
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    className="item-accordion text-accordion"
                /> */}
                <AccordionRegular head={<><BallotIcon/>Details</>}
                    text={<><Details /></>}
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                    className="item-accordion details-accordion"
                />
            </AccordionGroup>
        </SummaryFrameStyled>
    )
}

export default ItemSummaryFrame