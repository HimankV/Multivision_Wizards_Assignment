"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function BarGraph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const [students, setStudents] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const res = await fetch("/api/students");
      const studentData = await res.json();
      setStudents(studentData);
    }
    fetchStudents();
  }, []);

  useEffect(() => {
    async function fetchMonths() {
      const res = await fetch("/api/months");
      const months = await res.json();
      setData(months);
    }
    fetchMonths();
  }, []);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Create a lookup for month counts
  const monthCounts = {};
  data.forEach((item) => {
    monthCounts[item.Month_Enrolled] = item._count.Month_Enrolled;
  });

  // Map labels to counts (default to 0 if not present)
  const chartDataArray = labels.map((month) => monthCounts[month] || 0);

  const barChartData = {
    labels,
    datasets: [
      {
        label: "Enrollments in Months",
        data: chartDataArray,
        backgroundColor: "rgb(58, 201, 120)",
        borderWidth: 0.1,
      },
    ],
  };
  return (
    <div
      style={{
        // border: "1px solid blue",
        height: "500px",
        width: "1000px",
        padding: "25px",
      }}
    >
      <Bar options={{}} data={barChartData} />
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "12px",
          height: "200px",
        }}
      ></div>
    </div>
  );
}

export default BarGraph;
