import { useState } from 'react';
import { AutoComplete } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import './SearchInput.css';

const SearchInput = () => {
  const [stringData, setStringData] = useState([]);
  const [value, setValue] = useState('');
  const handleStringSearch = (value) => {
    let result;
    if (value) {
      result = ['gmail.com', '163.com', 'qq.com'].map(
        (domain) => `${value}@${domain}`
      );
    } else {
      result = [];
    }
    setStringData(result);
  };

  const handleChange = (value) => {
    console.log('onChange', value);
    setValue(value);
  };
  return (
    <>
      <AutoComplete
        data={stringData}
        value={value}
        showClear
        size='large'
        prefix={<IconSearch />}
        placeholder='搜索... '
        onSearch={handleStringSearch}
        onChange={handleChange}
        style={{ width: 200, marginRight: 50 }}
      />
    </>
  );
};

export default SearchInput;
