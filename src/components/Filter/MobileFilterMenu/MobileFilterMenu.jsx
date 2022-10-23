import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from "@mui/material";
import ButtonOutlined from "~components/Buttons/ButtonOutlined";
import Filters from './Filters';
import Sort from './Sort';
import { FilterMenuBody, FilterMenuContainer, FilterMenuContent, FilterMenuFooter, FilterMenuHeader, FilterMenuStyled } from "./style";

const MobileFilterMenu = ({ active, setActive, content }) => {
    return (
        <FilterMenuStyled active={active}>
            <FilterMenuContainer>
                <FilterMenuContent>
                    <FilterMenuHeader>
                        <Typography variant="xs">
                        {content === "filters" && "Filters"}
                        {content === "sort" && "Sort by"}
                        </Typography>
                        <Button onClick={() => setActive(false)}>
                            <CloseIcon />
                        </Button>
                    </FilterMenuHeader>
                    <FilterMenuBody>
                        {content === "filters" && <Filters />}
                        {content === "sort" && <Sort />}
                    </FilterMenuBody>
                </FilterMenuContent>
                <FilterMenuFooter>
                    <ButtonOutlined width="100%" padding="20px">Clear All</ButtonOutlined>
                    <ButtonOutlined width="100%" padding="20px" background="rgb(32, 129, 226)" color="#fff">Done</ButtonOutlined>
                </FilterMenuFooter>
            </FilterMenuContainer>
        </FilterMenuStyled>
    )
}

export default MobileFilterMenu