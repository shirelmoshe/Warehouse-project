export const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Sales',
        data: [1500, 1800, 2200, 1900, 2500, 2800, 3200, 3100, 2800, 2400, 2100, 1800],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  export const salesOptions ={
    Plugins:{
        legend:true
    },
    scales:{
      y:{

      }  
    }
  }
  

  export const inventoryData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Product A',
        data: [120, 110, 100, 90, 80, 70, 65, 60, 55, 50, 45, 40],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Product B',
        data: [200, 190, 180, 170, 160, 150, 145, 140, 135, 130, 125, 120],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Product C',
        data: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25],
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };
  


  export const pieChartData = {
    labels: ['Food', 'Kitchen Tools', 'Electronics', 'Clothing', 'Home Decor'],
    datasets: [
      {
        data: [3000, 1500, 2000, 2500, 1800],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8C46FF', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8C46FF', '#FF9F40'],
      },
    ],
  };
   
  export const paymentData = {
    labels: ['Cash', 'Credit Card'],
    datasets: [
      {
        data: [7500, 4500], // Replace these values with your actual sales data for cash and credit card payments
        backgroundColor: ['#36a2eb', '#ff6384'],
        hoverBackgroundColor: ['#36a2eb', '#ff6384'],
      },
    ],
  };

 export  const sales = {
    labels: ['Branch A', 'Branch B', 'Branch C'], // Replace with your actual branch names
    datasets: [
      {
        label: 'Food', // Replace with your product category name
        data: [15000, 12000, 18000], // Replace with actual sales data for Food category in each branch
        backgroundColor: '#36a2eb',
      },
      {
        label: 'Kitchen Tools', // Replace with your product category name
        data: [8000, 10000, 7500], // Replace with actual sales data for Kitchen Tools category in each branch
        backgroundColor: '#ff6384',
      },
      // Add more datasets for other product categories as needed
    ],
  };


 export  const TotalSalesRevenueOverTimeChartData = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Replace with your actual time labels (days, weeks, or months)
  datasets: [
    {
      label: 'Total Sales Revenue',
      data: [5000, 8000, 6000, 10000, 7500], // Replace with your actual cumulative sales revenue data over time
      borderColor: '#36a2eb',
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    },
  ],
};


export const scatterData = {
  datasets: [
    {
      label: 'Product Data',
      data: [
        { x: 5, y: 10 }, // Replace with your actual product data (price and sales quantity)
        { x: 10, y: 15 },
        { x: 15, y: 20 },
        { x: 20, y: 25 },
        { x: 25, y: 30 },
        // Add more data points as needed
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set the color of the data points
      borderColor: 'rgba(255, 99, 132, 1)', // Set the color of the border around the data points
    },
  ],
};

export const heatMapData = {
  labels: ['Region 1', 'Region 2', 'Region 3', 'Region 4'], // Replace with your actual regions
  datasets: [
    {
      data: [
        [10, 20, 30, 15], // Replace with sales data for each product in each region
        [5, 15, 25, 10],
        [20, 25, 35, 5],
        [15, 30, 10, 20],
      ],
      borderWidth: 1,
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set the color of the data points
      hoverBackgroundColor: 'rgba(255, 99, 132, 1)', // Set the color of the data points on hover
    },
  ],
};

 export const donutChartData = {
  labels: ['Cashiers', 'Online Buyers', 'Other'],
  datasets: [
    {
      data: [30, 50, 20], // Replace with your actual sales distribution data
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'], // Set custom colors for each segment
      hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'], // Set hover colors for each segment
    },
  ],
};

export const bubbleChartData = {
  datasets: [
    {
      label: 'Product Data',
      data: [
        { x: 10, y: 20, r: 30 }, // Replace with your actual data for each product
        { x: 15, y: 25, r: 40 },
        // Add more data points as needed
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Set bubble color
      hoverBackgroundColor: 'rgba(255, 99, 132, 1)', // Set bubble hover color
    },
  ],
};
