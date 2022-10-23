import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useRef, useState } from 'react';
import { CLoseBtnBox, MainIconBox, MobileSearchBoxStyled } from './style';

const MobileSearchBox = ({ toggleMobileSearch, mainIcon, placeholder }) => {

    const ref = useRef(null);
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const resetInput = () => {
        setInput('');
    }

    return (
        <MobileSearchBoxStyled className='search-box'>
            <MainIconBox>
                {
                    mainIcon
                        ? mainIcon
                        :
                        <Button onClick={() => toggleMobileSearch(false)}>
                            <ChevronLeftIcon />
                        </Button>

                }
            </MainIconBox>
            <input ref={ref} type="text" value={input} onChange={handleInput} placeholder={placeholder || 'Search Opensea'} />
            <CLoseBtnBox>
                {
                    input && <Button onClick={resetInput}>
                        <CloseIcon />
                    </Button>
                }
            </CLoseBtnBox>
        </MobileSearchBoxStyled>
    )
}

export default MobileSearchBox