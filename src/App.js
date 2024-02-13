import { useState } from 'react';
import './App.css';
import AutoCompleteDropdown from './shared/AutoCompleteDropdown.tsx';

function App() {
  const [dropdownValues, setDropdownValues] = useState([
    { label: 'Education' },
    { label: 'Yeeeah, Science!' },
    { label: 'Art' },
    { label: 'Sport' },
    { label: 'Games' },
    { label: 'Health' },
  ]);

  const handleEnterKey = (value) => {
    setDropdownValues([...dropdownValues, { label: value }]);
  };

  return (
    <div className='App'>
      <h1>Lobox</h1>
      <div className='dropdownCls'>
        <AutoCompleteDropdown
          options={dropdownValues}
          label={'Select/Add Value'}
          handleEnterKey={(value) => handleEnterKey(value)}
        />
      </div>
    </div>
  );
}

export default App;
