import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Low', value: 10 },
  { name: 'Medium', value: 20 },
  { name: 'High', value: 17 },
];

const PriorityChart = () => {
  return (
     <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
      <text x="300" y="30" textAnchor="middle" dominantBaseline="middle">Tickets by Priority</text>
    </BarChart>
  );
};

export default PriorityChart;