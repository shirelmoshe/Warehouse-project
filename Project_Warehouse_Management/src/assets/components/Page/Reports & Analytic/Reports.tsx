import React from 'react';
import { Tabs, Table } from 'antd'; 
import { columns } from './columns';
import { data } from '../../../server/ReportsData';
import { LowStockAlertsReportData } from '../../../server/LowStockAlertsReportData';
import { LowStockAlertsReport } from './LowStockAlertsReport';
import { ExpiryBestBeforeReport } from './ExpiryBestBeforeReport';
import { ExpiryBestBeforeReportData } from '../../../server/ExpiryBestBeforeReport';
import { SlowMovingItemsReport } from './SlowMovingItemsReport';
import { SlowMovingItemsReportData } from '../../../server/SlowMovingItemsReportData';
import { ProductMovementReport } from './ProductMovementReport';
import { ProductMovementReportData } from '../../../server/ProductMovementReportData';
import "./Reports.css"

const { TabPane } = Tabs;

 export const InventoryLevelsReport = () => {
  return (
    <Tabs defaultActiveKey="inventory" type="card" className="inventory">
      <TabPane tab="Inventory Levels" key="inventory">
        <Table columns={columns} dataSource={data} />
      </TabPane>
      <TabPane tab="Low Stock Alerts" key="lowStock">
        <Table columns={LowStockAlertsReport} dataSource={LowStockAlertsReportData} />
      </TabPane>
      <TabPane tab="Expiry" key="Expiry">
        <Table columns={ExpiryBestBeforeReport} dataSource={ExpiryBestBeforeReportData} />
      </TabPane>
      <TabPane tab="SlowMovingItemsReport" key="SlowMovingItemsReport">
        <Table columns={SlowMovingItemsReport} dataSource={SlowMovingItemsReportData} />
      </TabPane>
      <TabPane tab="Product Movement Report" key="ProductMovementReport">
        <Table columns={ProductMovementReport} dataSource={ProductMovementReportData} />
      </TabPane>
    </Tabs>
  );
};