import React, { useState } from 'react';
import { Table } from 'antd';


const OrderHistory = () => {
  const [orderData, setOrderData] = useState([
    {
      orderNumber: '12345',
      orderDate: '2023-07-15',
      status: 'נשלח'
    },
    {
      orderNumber: '67890',
      orderDate: '2023-07-10',
      status: 'נשלח'
    },
    {
      orderNumber: '54321',
      orderDate: '2023-06-25',
      status: 'הושלם'
    }
  ]);

  const columns = [
    { title: 'מספר הזמנה', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: 'תאריך הזמנה', dataIndex: 'orderDate', key: 'orderDate' },
    { title: 'סטטוס', dataIndex: 'status', key: 'status' }
  ];

  return (
    <div>
      <h2>היסטוריית הזמנות</h2>
      <Table columns={columns} dataSource={orderData} />
    </div>
  );
};

export default OrderHistory;
