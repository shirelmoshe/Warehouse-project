// UserTable.tsx
import React, { useEffect, useState } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { User } from '../../../interfaces/User/User';
import { fetchUsers } from '../../../server/usersData';
import { columns } from './tableColumns';
import './UserTable.css';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [filterText, setFilterText] = useState<string>('');

  useEffect(() => {
   
    const fetchUsersData = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    fetchUsersData();
  }, []);

  useEffect(() => {
  
    const filtered = users.filter((user) => {
      const filterValue = filterText.toLowerCase();
      const nameMatch = user.name.toLowerCase().includes(filterValue);
      const emailMatch = user.email.toLowerCase().includes(filterValue);
      return nameMatch || emailMatch;
    });
    setFilteredUsers(filtered);
  }, [users, filterText]);

  return (
    <div className="table-container">
    
        <div className={`search-container`}>
          <Input
            placeholder="Search by Name or Email"
            value={filterText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
            prefix={<SearchOutlined />}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
   
      <Table dataSource={filteredUsers} columns={columns} rowKey="id" />
    </div>
  );
};

export default UserTable;
