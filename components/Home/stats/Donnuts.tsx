import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Donnuts = ({ title, items }) => (
  <div className="w-96 text-left font-extrabold text-xl">
    <h2 className="text-gray-500">{title}</h2>
    <Doughnut data={items} width={40} height={40} />
  </div>
);

export default Donnuts;