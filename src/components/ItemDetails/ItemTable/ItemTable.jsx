import { BodyStyled, CellStyled, HeadCellStyled, HeadStyled, RowStyled, TableStyled } from '~components/Table/style';
import ListingRow from '../ItemMain/Rows/ListingRow';

const ItemTable = ({ headData, bodyData, bodyP }) => {
    return (
        <TableStyled>
            <HeadStyled border="1px solid rgb(229, 232, 235)" p="5px 10px">
                <RowStyled className='row'>
                    {
                        headData.map((item, index) => (
                            <CellStyled key={index * .003} width={item === "empty" ? "10%" : "20%"}>
                                <HeadCellStyled variant='2xs' fw="400">
                                    {
                                        item === "empty"
                                            ? <span>&nbsp;</span>
                                            : item
                                    }
                                </HeadCellStyled>
                            </CellStyled>))
                    }
                </RowStyled>
            </HeadStyled>
            <BodyStyled p={bodyP ? bodyP : "20px 10px"} bg="rgb(251, 253, 255)">
                {
                    bodyData.length > 0
                        ? bodyData.map((item, index) => (
                            <ListingRow data={item} />
                        ))
                        : <ListingRow data={bodyData} />
                }
            </BodyStyled>
        </TableStyled>
    )
}

export default ItemTable