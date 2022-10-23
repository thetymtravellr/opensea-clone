import { Container, Toolbar } from "@mui/material"
import WalletItemList from "~components/WalletItems/WalletItemList"
import { WalletCollectionStyled, WalletItemWrapper } from "./style"

const WalletCollection = () => {
    return (
        <WalletCollectionStyled>
            <Toolbar />
            <Container>
                <h1>Connect Your Wallet</h1>
                <WalletItemWrapper>
                    <WalletItemList />
                </WalletItemWrapper>
            </Container>
        </WalletCollectionStyled>
    )
}

export default WalletCollection