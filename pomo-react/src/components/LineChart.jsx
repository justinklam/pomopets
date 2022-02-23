import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
const { faker } = require("@faker-js/faker");

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 15,
        },
      },
    },
    title: {
      display: true,
      text: "Most Focused Periods",
    },
    padding: {
      top: 30,
      bottom: 30,
    },
    responsive: true,
    animation: {
      animateScale: true,
    },
  },
};

const labels = ["00:00", "6:00", "12:00", "18:00", "23:00"];

export const data = {
  labels,
  datasets: [
    {
      label: "Number of Focused Periods",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export default function LineChart() {
  return (
    <div className="line-chart main-container">
      <Line options={options} data={data} />
    </div>
  );
}
