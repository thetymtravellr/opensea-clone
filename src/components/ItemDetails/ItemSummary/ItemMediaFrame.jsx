import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Tooltip, Typography } from "@mui/material";
import { FavoriteButton, MeadiaFrameStyled, Media } from './style';

const ItemMediaFrame = ({ image, tooltip }) => {
    return (
        <MeadiaFrameStyled>
            <Media>
                <Media.Header>
                    {tooltip}
                    <Typography variant='base' fontWeight="300">
                        <span>1</span>
                        <Tooltip title="Favorite" arrow placement='top'>
                            <FavoriteButton>
                                <FavoriteBorderIcon />
                            </FavoriteButton>
                        </Tooltip>
                    </Typography>
                </Media.Header>
                <Media.Image>
                    <img src="https://i.seadn.io/gae/46OgMN07wWz5nqLHAbTOMRCsVOKMQcMx37uiCaRpUwTHmcuDy4-d88VAq3ZEhdivQpuY0ExGpPM9rekvABYhMwW5WPYbohNGOKASFQ?auto=format&w=1000" alt="" />
                </Media.Image>
            </Media>
        </MeadiaFrameStyled>
    )
}

export default ItemMediaFrame