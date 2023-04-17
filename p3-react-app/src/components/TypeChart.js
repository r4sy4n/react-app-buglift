import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Bugs/Error', value: 20 },
  { name: 'Feature request', value: 18 },
  { name: 'Task', value: 9 },
];

const TypeChart = () => {
  return (
     <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#F9D923" />
      <text x="300" y="30" textAnchor="middle" dominantBaseline="middle">Tickets by Type</text>
    </BarChart>
  );
};

export default TypeChart;