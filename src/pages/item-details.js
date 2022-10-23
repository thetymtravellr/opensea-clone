import { Toolbar } from '@mui/material'
import Header from '~components/Header'
import ItemDetails from '~containers/ItemDetails'

const ItemsDetailsPage = () => {
  return (
    <>
    <Header bg={true}/>
    <Toolbar/>
    <ItemDetails/>
    </>
  )
}

export default ItemsDetailsPage