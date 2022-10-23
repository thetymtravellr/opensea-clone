import { useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { BodyStyled, CellStyled, CollectionImage, CollectionIndex, CollectionInfo, CollectionTitle, HeadStyled, LinkRowStyled, MobileVisibleText, RowStyled, TableStyled, VolumeText } from './style';

const CollectionTable = ({ data, listPos, active }) => {

  const desktop = useMediaQuery('(min-width:992px)');

  return (
    <TableStyled>
      <HeadStyled>
        <RowStyled className='row'>
          <CellStyled className='head-cell'>COLLECTION</CellStyled>
          {
            desktop && <CellStyled className='head-cell'>FLOOR PRICE</CellStyled>
          }
          <CellStyled className='head-cell'>VOLUME</CellStyled>
        </RowStyled>
      </HeadStyled>
      <Link href="/">
        <BodyStyled>
          {data.map((el, i) => (
            <LinkRowStyled className="row" href="https://facebook.com">
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
                    <img src={el.image} alt="" />
                  </CollectionImage>
                  <CollectionTitle>
                    <span>{el.title}</span>

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
          ))}
        </BodyStyled>
      </Link>
    </TableStyled>
  )
}

export default CollectionTable