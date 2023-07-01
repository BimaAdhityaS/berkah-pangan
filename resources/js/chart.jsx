import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Porsi Makanans",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 1000, 2000, 2100, 3500, 7000],
    },
    {
      label: "Penerima Berkah",
      backgroundColor: "rgb(62, 145, 39)",
      borderColor: "rgb(105, 245, 66)",
      data: [0, 925, 1995, 2000, 3254, 6800],
    },
    {
      label: "Potensi Makanan Terbuang",
      backgroundColor: "rgb(21, 42, 235)",
      borderColor: "rgb(49, 62, 181)",
      data: [0, 10000, 15000, 20000, 30000],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="flex justify-center items-center w-3/4 py-5 px-0">
      <Line data={data} />
    </div>
  );
};

export default LineChart;