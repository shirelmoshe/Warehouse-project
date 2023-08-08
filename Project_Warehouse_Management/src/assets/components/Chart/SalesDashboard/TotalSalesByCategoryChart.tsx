import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import randomColor from 'randomcolor';

Chart.register(...registerables);

const TotalSalesByCategoryChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);


  const categories = ["Food", "Kitchen Tools", "Electronics", "Clothing"];
  const totalSales = [5000, 3500, 4200, 2800];

  const categoryColors = randomColor({ count: categories.length });

  
  const data = {
    labels: categories,
    datasets: [{
      label: "Total Sales",
      data: totalSales,
      backgroundColor: categoryColors,
      borderColor: categoryColors,
      borderWidth: 1
    }]
  };


  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  useEffect(() => {
   
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

 
    const ctx = chartRef.current?.getContext("2d");
    if (ctx) {
      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
      });
    }
  }, [data, options]);

  return (
    <div style={{ width: "50%", height: "50%" }}>
      <h2>Total Sales by Product Category</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default TotalSalesByCategoryChart;
