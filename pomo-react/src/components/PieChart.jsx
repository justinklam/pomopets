import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Work", "Study", "Exercise", "Tidy-Up", "Reading", "Meditation"],
  datasets: [
    {
      labels: ["Work", "Study", "Exercise", "Tidy-Up", "Reading", "Meditation"],
      data: [12, 19, 3, 5, 2, 3], // can be hardcoded values just for show
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 15,
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          var data = context.dataset.data,
            label = context.label,
            currentValue = context.raw,
            total = 0;

          for (var i = 0; i < data.length; i++) {
            total += data[i];
          }
          var percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );

          return label + ": " + currentValue + " sessions (" + percentage + "%)";
        },
      },
    },
  },
  title: {
    display: true,
    text: "Pie Chart",
    color: "blue",
    font: {
      size: 34,
    },
    padding: {
      top: 30,
      bottom: 30,
    },
    responsive: true,
    animation: {
      animateScale: true,
    },
  }
}

export default function PieChart() {
  return (
    <>
      <div className="body pt-5">
        <div className="chart-container main-container">
          <div>
            <h1 className="chart-h1 logo-text"> Your Pomodoros! </h1>
            <p className="chart-blurb"> This pie chart is a reflection of your focus progress and summarizes how you have spent your time.</p>
              <div className="pie-chart">
                <Pie data={data} options={options} />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}