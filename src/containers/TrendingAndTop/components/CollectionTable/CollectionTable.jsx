import VerifiedIcon from '@mui/icons-material/Verified';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { Children } from 'react';
import { BodyStyled, CellStyled, CollectionImage, CollectionIndex, CollectionInfo, CollectionTitle, HeadCellStyled, HeadStyled, LinkRowStyled, MobileVisibleText, RowStyled, TableStyled, VolumeText } from './style';

const CollectionTable = ({ data, listPos, active, href }) => {

  const desktop = useMediaQuery('(min-width:992px)');

  return (
    <TableStyled>
      <HeadStyled>
        <RowStyled className='row'>
          <CellStyled>
            <HeadCellStyled>COLLECTION</HeadCellStyled>
          </CellStyled>
          {
            desktop && <CellStyled>
              <HeadCellStyled>FLOOR PRICE</HeadCellStyled>
            </CellStyled>
          }
          <CellStyled>
            <HeadCellStyled>
              VOLUME
            </HeadCellStyled>
          </CellStyled>
        </RowStyled>
      </HeadStyled>
      <Link href="/">
        <BodyStyled>
          {Children.toArray(data.map((el, i) => (
            <LinkRowStyled className="row" href={"/collection-details"}>
              <CellStyled>
                <CollectionInfo>
                  <CollectionIndex>
                    {
                      listPos === 1
                        ? i + 1
                        : i + 6
                    }
                  </CollectionIndex>
                  <CollectionImage>
                    <img src={el.image} alt="collection" />
                  </CollectionImage>
                  <CollectionTitle>
                    <span className='title'>{el.title}{el?.verified && <VerifiedIcon fontSize='16px' color='primary' />}</span>
                    {
                      !desktop && <MobileVisibleText><span>Floor:</span> {el.floorPrice}</MobileVisibleText>
                    }
                  </CollectionTitle>
                </CollectionInfo>
              </CellStyled>
              {
                desktop && <CellStyled>{el.floorPrice}</CellStyled>
              }
              <CellStyled>
                <VolumeText state={(el.increase && 'increase') || (el.decrease && 'decrease')}>
                  {el.volume}
                  {active === 'top' && <span className=''>{el.increase || el.decrease || '-'}</span>}
                </VolumeText>
              </CellStyled>
            </LinkRowStyled>
          )))}
        </BodyStyled>
      </Link>
    </TableStyled>
  )
}

export default CollectionTable