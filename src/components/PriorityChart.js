import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const PriorityChart = ({tickets}) => {
  const data = [
  { name: 'Low', value: tickets.filter(ticket => ticket.ticketPriority === 'Low').length },
  { name: 'Medium', value: tickets.filter(ticket => ticket.ticketPriority === 'Medium').length },
  { name: 'High', value: tickets.filter(ticket => ticket.ticketPriority === 'High').length },
];

  return (
     <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#E21818" />
      <text x="300" y="30" textAnchor="middle" dominantBaseline="middle">Tickets by Priority</text>
    </BarChart>
  );
};

export default PriorityChart;