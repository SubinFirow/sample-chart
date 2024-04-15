"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { xAxisData, yAxisData } from "./service";

export default function Home() {
  const [yAxis, setYAxis] = useState([]);
  const [xAxis, setXAxis] = useState([]);

  useEffect(() => {
    yAxisData()
      .then((res) => {
        setYAxis(res.data);
      })
      .catch((error) => {
        // do nothing
      });
  }, []);

  useEffect(() => {
    xAxisData()
      .then((res) => {
        setXAxis(res.data);
      })
      .catch((error) => {
        // do nothing
      });
  }, []);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = xAxis.map((item, i) => {
    if (i < 49) {
      return item.Label;
    }
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: xAxis.map((item, i) => {
          if (i < 50) {
            return item.RandomNumber;
          }
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: yAxis.map((item, i) => {
          if (i < 50) {
            return item.RandomNumber;
          }
        }),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <React.Fragment>
      <Bar options={options} data={data} />
    </React.Fragment>
  );
}
