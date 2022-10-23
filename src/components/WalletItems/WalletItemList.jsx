import { useState } from 'react'
import WalletItems from './components/WalletItems'
import { walletOptions } from "./data"
import { ListButton, ListItemStyled, ListStyled, ListWrapper } from './style'
const WalletItemList = () => {
    const optionToShow = 5;
    const [visibleOptions, setVisibleOptions] = useState(optionToShow);
    const handleOptionVisibility = () => {
        setVisibleOptions(prev => {
            if (prev < walletOptions.length) {
                return walletOptions.length
            } else {
                return optionToShow
            }
        })
    }
    return (
        <ListWrapper>
            <ListStyled>
                {
                    walletOptions.slice(0, visibleOptions).map(item => <ListItemStyled key={item.title} mobile={item.mobile}>
                        <WalletItems logo={item.logo} title={item.title} type={item.type} mobile={item.mobile} />
                    </ListItemStyled>)
                }
                <ListButton variant='button' onClick={handleOptionVisibility}>Show {visibleOptions < walletOptions.length ? 'more' : 'fewer'} options</ListButton>
            </ListStyled>
        </ListWrapper>
    )
}

export default WalletItemList