import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Drawer } from '@mui/material';
import SuperTag from '~components/SuperTag';
import MobileSearchBox from '../../Search/MobileSearchBox';
import { DrawerContent, NewDrawerStyled } from '../style';

const NewDrawer = ({ state, onClose, data, social }) => {

    return (

        <NewDrawerStyled
            BackdropProps={{ style: { opacity: .6, background: "#000" } }}
            anchor={'right'}
            open={state}
            onClose={() => onClose(false)}
            as={Drawer}
        >
            <DrawerContent>
                <Box className='search'>
                    <MobileSearchBox
                        mainIcon={
                            <>
                                <Button>
                                    <SearchIcon />
                                </Button>
                            </>
                        }
                        placeholder="Search..."
                    />
                </Box>
                <Box>
                    <ul className="links">
                        {
                            data.map((item, i) => (
                                <li>
                                    <a href="/blog/details">
                                        {item}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </Box>
                <Box>
                    <ul className='social-links-drawer'>
                        {
                            social.map((item, i) => (
                                <li>
                                    <a href="/blog/details">
                                        <SuperTag value={item.icon} />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </Box>
            </DrawerContent>
        </NewDrawerStyled>

    )
}

export default NewDrawer