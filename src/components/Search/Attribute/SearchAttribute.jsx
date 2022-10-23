import * as React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { Input, Listbox, Wrapper } from './style';


export default function SearchAttribute({...rest}) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: mockdata,
    getOptionLabel: (option) => option.title,
  });

  return (
    <Wrapper {...rest}>
      <div {...getRootProps()}>

        <Input {...getInputProps()} />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
      {groupedOptions.length > 0 ? (
        <>
        <Listbox {...getListboxProps()}>
          <li className='wrapper'>
            <span>ATTRIBUTE</span>
            <span>LOOR</span>
          </li>
          {groupedOptions.map((option, index) => (
            <li className='item' {...getOptionProps({ option, index })}>
              <p><span>{option.attrTop}</span><span>{option.floor}</span></p>
              <small>{option.attrBottom}</small>
            </li>
          ))}
        </Listbox>
        </>
      ) : null}
    </Wrapper>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const mockdata = [
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  },
  {
    attrTop:"1/1",
    attrBottom:"0.43%",
    floor:"55 ETH"
  }
];
