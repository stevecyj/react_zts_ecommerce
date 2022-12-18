import { useState } from 'react';
import styled from '@emotion/styled';
import { AutoComplete } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';

const SAutoComplete = styled(AutoComplete)`
  width: 350px;
  margin-right: 40px;
  & .semi-input-wrapper {
    border-radius: 19px;
  }
`;

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
      <SAutoComplete
        data={stringData}
        value={value}
        showClear
        size="large"
        prefix={<IconSearch />}
        placeholder="搜尋"
        onSearch={handleStringSearch}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchInput;
