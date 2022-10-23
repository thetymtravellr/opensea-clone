import { Drawer, Toolbar } from '@mui/material'
import MobileMenu from '../../Menu/MobileMenu/MobileMenu'
import { MobileDrawerStyled } from '../style'

const MobileDrawerMain = ({ state, onClose}) => {
  return (
    <>
            <MobileDrawerStyled
                BackdropProps={{ style: { opacity: .6,background:"#000" } }}
                anchor={'right'}
                open={state}
                onClose={onClose(false)}
                as={Drawer}
            >
                <Toolbar/>
                <MobileMenu/>
            </MobileDrawerStyled>
        </>
  )
}

export default MobileDrawerMain