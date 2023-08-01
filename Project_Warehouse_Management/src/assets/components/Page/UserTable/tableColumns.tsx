
import { ColumnType } from 'antd/es/table';
import { User } from '../../../interfaces/User/User';
export const columns: ColumnType<User>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];