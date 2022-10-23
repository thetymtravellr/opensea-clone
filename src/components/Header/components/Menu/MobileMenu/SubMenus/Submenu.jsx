import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { menuItems } from "../../data";
import MenuItem from "../MenuItem";
import { MenuStyle, SubMenuStyled } from "../style";
import { CloseButton } from "./style";

const Submenu = ({ setMenu, index }) => {

    return (
        <SubMenuStyled>
            <CloseButton onClick={() => setMenu('main')}><ChevronLeftIcon /> {menuItems[index].label} </CloseButton>
            <MenuStyle component="ul" direction="column">
                {
                    menuItems[index].dropdown?.map((item, index) => {
                        return (
                            <MenuItem key={index + item.label} label={item.label} link={item.link} icon={item.icon} dropdown={item.dropdown} social={item.social} subMenu={true} />
                        )
                    })
                }
            </MenuStyle>
        </SubMenuStyled>
    )
}

export default Submenu