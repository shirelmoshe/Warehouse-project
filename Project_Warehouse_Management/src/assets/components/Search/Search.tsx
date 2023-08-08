import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchProps {
  placeholder: string;
  onSearch: (searchText: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  const [filterText, setFilterText] = useState<string>('');

  const handleSearch = () => {
    onSearch(filterText);
  };

  return (
    <div className="search-container">
      <Input
        placeholder={placeholder}
        value={filterText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
        prefix={<SearchOutlined />}
        className="search-input"
      />
      <button type="button" className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
