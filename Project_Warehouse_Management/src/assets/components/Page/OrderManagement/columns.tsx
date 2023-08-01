import { Space, Tag } from "antd";

export const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Shipped" ? "green" : "blue"}>{status}</Tag>
      ),
    },
    {
      title: "Order Total",
      dataIndex: "orderTotal",
      key: "orderTotal",
    },
    {
      title: "Shipping Address",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (paymentStatus) => (
        <Tag color={paymentStatus === "Paid" ? "green" : "red"}>
          {paymentStatus}
        </Tag>
      ),
    },
    {
      title: "Tracking Number",
      dataIndex: "trackingNumber",
      key: "trackingNumber",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space size="middle">
          <a href="#">View</a>
          <a href="#">Mark as Shipped</a>
          <a href="#">Mark as Delivered</a>
        </Space>
      ),
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Order Items",
      dataIndex: "orderItems",
      key: "orderItems",
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
      render: (invoice) => (invoice ? <a href={invoice}>Link</a> : "-"),
    },
  ];
