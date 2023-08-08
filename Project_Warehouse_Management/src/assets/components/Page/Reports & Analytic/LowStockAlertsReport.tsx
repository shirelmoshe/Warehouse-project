import {  Space } from 'antd';

export const LowStockAlertsReport = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Store/Location',
      dataIndex: 'storeLocation',
      key: 'storeLocation',
    },
    {
      title: 'Available Quantity',
      dataIndex: 'availableQuantity',
      key: 'availableQuantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <button onClick={() => handleReorder(record)}>Reorder</button>
        </Space>
      ),
    },
  ];