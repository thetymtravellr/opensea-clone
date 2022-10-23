import { RadioGroup } from "@mui/material";
import Radio from "~components/Form/Radio";

const data = [
  'Recently listed',
  'Recently created',
  'Recently sold',
  'Recently received',
  'Ending soon',
  'Price low to high',
  'Price high to low',
  'Highest last sale',
  'Most viewed',
  'Most favorited',
  'Oldest'
];

const Sort = () => {
  return (
    <>
    <RadioGroup>
      {
        data.map((el,i) => <Radio key={i*.001} value={el} label={el}/>)
      }
    </RadioGroup>
    </>
  )
}

export default Sort