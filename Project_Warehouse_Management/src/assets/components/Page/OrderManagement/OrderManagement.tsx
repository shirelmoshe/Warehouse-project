import React from "react";
import { Table} from "antd";
import { sampleOrders } from "../../../server/sampleOrders"; 
import { columns } from "./columns";

const OrderManagement = () => {
    
  const data = sampleOrders; 

  return (
    <div>
      <h2>Order Management</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default OrderManagement;
