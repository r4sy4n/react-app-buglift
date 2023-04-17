import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Projects', value: 10 },
  { name: 'Tickets', value: 20 },
];

const BarChartData = () => {
  return (
    <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#187498" />
        <text x="300" y="30" textAnchor="middle" dominantBaseline="middle">Total Projects and Tickets</text>
      </BarChart>
  );
  }
  export default BarChartData;