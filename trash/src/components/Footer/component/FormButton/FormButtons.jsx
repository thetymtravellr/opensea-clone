import { Button } from '@mui/material';
import React from 'react';
import Link from '../../../Link/index';
import { FormButtonsStyled } from './style';

const FormButtons = ({ logo, link }) => {
    return (
        <Link href={link}>
            <FormButtonsStyled>
                <div dangerouslySetInnerHTML={{ __html: logo}}>
                </div>
            </FormButtonsStyled>
        </Link>
    )
}

export default FormButtons