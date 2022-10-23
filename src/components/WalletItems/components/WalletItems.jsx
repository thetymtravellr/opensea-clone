import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { BreakPointText, WalletAvatar, WalletBox, WalletChip, WalletItemRight } from "../style";

const WalletItems = ({ logo, title, type, mobile }) => {
    return (
        <Link href="/">
            <WalletBox mobile={mobile}>
                <WalletItemRight>
                    <WalletAvatar alt={title} src={logo} />
                    <Typography variant='3xs'>{title}</Typography>
                </WalletItemRight>
                <WalletChip type={type} label={type} />
                {(mobile) && <BreakPointText>{mobile}</BreakPointText>}
            </WalletBox>
        </Link>
    )
}

export default WalletItems