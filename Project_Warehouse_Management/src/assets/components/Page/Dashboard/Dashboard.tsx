import React from 'react';
import { Tabs } from 'antd';
import { Line, Pie, Bar, Scatter, Doughnut, Bubble } from 'react-chartjs-2';
import ChartJS, { LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js/auto';
import { TotalSalesRevenueOverTimeChartData, bubbleChartData, donutChartData, inventoryData, paymentData, pieChartData, sales, salesData, salesOptions, scatterData } from '../../../server/salesData';
import "./Dashboard.css"
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const { TabPane } = Tabs;

const Dashboard = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Sales Trend Over Time" key="1" className="custom-card">
          <Line data={salesData} options={salesOptions}></Line>
        </TabPane>
        <TabPane tab="Inventory Levels Over Time" key="2" className="custom-card">
          <Line data={inventoryData} options={salesOptions}></Line>
        </TabPane>
        <TabPane tab="Sales by Product Category" key="3" className="custom-card">
          <Pie data={pieChartData} />
        </TabPane>
        <TabPane tab="Sales By Payment Method Chart" key="4" className="custom-card">
          <Pie data={paymentData} />
        </TabPane>
        <TabPane tab="Sales" key="5" className="custom-card">
          <Bar data={sales} />
        </TabPane>
        <TabPane tab="Total Sales Revenue Over Time Chart Data" key="6" className="custom-card">
          <Line data={TotalSalesRevenueOverTimeChartData} />
        </TabPane>
        <TabPane tab="Sales Distribution Donut Chart" key="7" className="custom-card">
          <Doughnut data={donutChartData} />
        </TabPane>
        <TabPane tab="Bubble Chart Options" key="8" className="custom-card">
          <Bubble data={bubbleChartData} />
        </TabPane>
        <TabPane tab="Scatter Chart" key="9" className="custom-card">
          <Scatter data={scatterData} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Dashboard;
