import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './autoCompleteDropdown.module.scss'

export interface DropDownType {
  label: string;
}

interface AutoCompleteDropdownProps {
  options: DropDownType[];
  width?: number;
  label: string;
  handleEnterKey: (value: string) => void;
}

const AutoCompleteDropdown: React.FC<AutoCompleteDropdownProps> = ({ options, width = 300, label, handleEnterKey }) => {
  const [inputValue, setInputValue] = React.useState('');

  const onHandleEnterKey = (event: any) => {
    if (event.key === 'Enter') {
      handleEnterKey(event.target.value);
      setInputValue('');
    }
  };

  return (
    <Autocomplete
      id='country-select-demo'
      sx={{ width }}
      className='dropdownField'
      options={options}
      autoHighlight
      inputValue={inputValue} // Controlled input value
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue); // Update input value
      }}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option: DropDownType) => (
        <Box component='li' {...props}>
          {option.label}
        </Box>
      )}
      renderInput={(params: any) => (
        <TextField
          {...params}
          label={label}
          onKeyDown={(e) => onHandleEnterKey(e)}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default AutoCompleteDropdown;
