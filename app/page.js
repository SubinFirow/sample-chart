"use client";
import React, { useEffect, useState } from "react";
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
import { Bar, Line } from "react-chartjs-2";
import { xAxisData, yAxisData } from "./service";

export default function Home() {
  const [yAxis, setYAxis] = useState([]);
  const [xAxis, setXAxis] = useState([]);

  useEffect(() => {
    yAxisData()
      .then((res) => {
        setYAxis(res.data?.slice(0, 50));
      })
      .catch((error) => {
        // do nothing
      });
  }, []);

  useEffect(() => {
    xAxisData()
      .then((res) => {
        setXAxis(res.data?.slice(0, 50));
      })
      .catch((error) => {
        // do nothing
      });
  }, []);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "X-axis Label", // Custom label for x-axis
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Y-axis Label", // Custom label for y-axis
        },
        // ticks: {
        //   callback: (value, index, values) => {
        //     return yAxis.map((item) => item.Label); // Use custom labels for y-axis
        //   },
        // },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels: xAxis.map((item) => item.Label),
    datasets: [
      {
        label: "Dataset 1",
        data: yAxis.map((item) => item.RandomNumber),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <React.Fragment>
      <Line options={options} data={data} width={100} height={50} />
    </React.Fragment>
  );
}
