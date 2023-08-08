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

  const applyFilter = (data: User[], searchText: string) => {
    const filterValue = searchText.toLowerCase();
    return data.filter(
      (user) =>
        user.name.toLowerCase().includes(filterValue) ||
        user.email.toLowerCase().includes(filterValue)
    );
  };

  useEffect(() => {
    const fetchUsersData = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    fetchUsersData();
  }, []);

  useEffect(() => {
    const filtered = applyFilter(users, filterText);
    setFilteredUsers(filtered);
  }, [users, filterText]);

  return (
    <div className="table-container">
      <div className={`search-container`}>
        <Input
          placeholder="Search by Name or Email"
          value={filterText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterText(e.target.value)
          }
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
