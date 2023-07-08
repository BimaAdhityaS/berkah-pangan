import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Porsi Makanan",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [250, 356, 350, 400, 500, 255, 600],
      },
      {
        label: "Penerima Berkah",
        backgroundColor: "rgb(62, 145, 39)",
        borderColor: "rgb(105, 245, 66)",
        data: [200, 350, 350, 325, 480, 205, 600],
      },
      {
        label: "Potensi Makanan Terbuang",
        backgroundColor: "rgb(21, 42, 235)",
        borderColor: "rgb(49, 62, 181)",
        data: [50, 6, 0, 75, 20, 50, 0],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        maxTicksLimit: 5,
        max: 700,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex justify-center items-center w-auto py-5 px-0 h-96">
      <div className="w-screen md:max-w-6xl h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
