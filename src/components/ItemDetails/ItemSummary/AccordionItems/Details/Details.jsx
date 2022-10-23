import DetailsStyled from './style'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { RegulerTooltip } from '~components/Tooltip';


const Details = () => {
    return (
        <DetailsStyled >
           <DetailsStyled.Item>
            Contract Address
            <a href="https://null.com" className='right-text'>0x4094...1087</a>
           </DetailsStyled.Item>
           <DetailsStyled.Item>
           Token ID
            <a href="https://null.com" className='right-text'>570</a>
           </DetailsStyled.Item>
           <DetailsStyled.Item>
           Token Standard
            <span className='right-text'>ERC-721</span>
           </DetailsStyled.Item>
           <DetailsStyled.Item>
           Blockchain
            <span className='right-text'>Ethereum</span>
           </DetailsStyled.Item>
           <DetailsStyled.Item>
           <div className='with-icon-tooltip'>Creator Earnings <RegulerTooltip  title={"The of this asset will receive 5% for every sale"}><InfoOutlinedIcon/></RegulerTooltip></div>
            <span className='right-text'>info 5%</span>
           </DetailsStyled.Item>
        </DetailsStyled>
    )
}

export default Details



// // 0x4094...1087
// Token ID
// 570
// Token Standard
// ERC-721
// Blockchain
// Ethereum
// Last Updated
// 21 days ago
// Creator Earnings
// info
// 5%