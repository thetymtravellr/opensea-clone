import styled from '@emotion/styled';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Tab, Typography } from '@mui/material';
import ItemToolbar from '~components/ItemDetails/ItemToolbar';
import { ToolbarButton } from '~components/ItemDetails/style';
import { RegulerTooltip } from '~components/Tooltip';

const TextStyled = styled(Typography)`
span {
    display: block;
    margin-bottom: 10px;
}
`

const AboutContent = styled.div`
display: flex;
img {
    width: 22px;
    height: 22px;
    margin-right: 10px;
    margin-top: 5px;
    border-radius: 10px;
}
`

const ToolbarContainer = styled.div`
margin-top: 40px;
.MuiTabs-flexContainer > div{

    width: 64px;
    height: 64px;

}
.MuiButtonBase-root {
    padding: 28px;
}

.opacity {
    opacity: 0.6;
}
`

const About = () => {
    return (
        <Box>
            <AboutContent>
                <img src="https://i.seadn.io/gae/Ygx-6bNAU-_b0dXIapV2oHAk713cpWtIj5HZDxBk4iFuuxhdMce-ddeNz2FItpgCenoCSGrII_OcUSwM7klPQE5WC4DeYCU8spiS7g?auto=format&w=256" alt="" />
                <TextStyled variant="2xs">
                    <span>
                        AlphaBlocks is a collection of 27 single edition images by New Zealand Landscape Photographer Rach Stewart spanning the years worth of travelling and capturing the beautiful country of New Zealand.
                        Rach is world known for her signature long exposure photography and dreamy imagery.
                    </span>
                    <span>
                        Aotearoa means The Land of the Long White Cloud, and was named so by the Maori navigators who voyaged to New Zealand and made it home.
                    </span>
                    <span>
                        'I have always been drawn in by natures incredible creations, especially chasing light and clouds, and I just happen to be lucky enough to live in such a place where the landscape is just as incredible as the skies that come with it.
                    </span>
                    <span>
                        These are the images that have resulted in some of the most incredible light paintings nature has ever shown me, right here at home in New Zealand.
                    </span>
                    <span>
                        I hope these images resonate with you as much as the memories do with me.'
                    </span>
                </TextStyled>
            </AboutContent>

            <ToolbarContainer>
                <ItemToolbar>
                    <>
                        <ToolbarButton className='item opacity'>
                            <RegulerTooltip title="Website">
                                <Tab icon={<LanguageIcon />} value="website" />
                            </RegulerTooltip>
                        </ToolbarButton>
                        <ToolbarButton className='item opacity'>
                            <RegulerTooltip title="Instagram">
                                <Tab icon={<InstagramIcon />} value="instagram" />
                            </RegulerTooltip>
                        </ToolbarButton>
                        <ToolbarButton className='item opacity'>
                            <RegulerTooltip title="Twitter">
                                <Tab icon={<TwitterIcon />} value="share" />
                            </RegulerTooltip>
                        </ToolbarButton>
                    </>
                </ItemToolbar>
            </ToolbarContainer>
        </Box>
    )
}

export default About