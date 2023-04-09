import React, { useState, useEffect } from 'react';
import { Chart, Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomFrequency = () => {
  return Math.floor(Math.random() * 100);
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Frequency/Time Line Chart',
      font: {
        size: 16,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time (s)',
        font: {
          size: 12,
        },
      },
      ticks: {
        maxTicksLimit: 5,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Frequency (Hz)',
        font: {
          size: 12,
        },
      },
    },
  },
};

const FrequencyChart = () => {
  const [data, setData] = useState({
    labels: ['0s', '1s', '2s', '3s', '4s'],
    datasets: [
      {
        data: [
          generateRandomFrequency(),
          generateRandomFrequency(),
          generateRandomFrequency(),
          generateRandomFrequency(),
          generateRandomFrequency(),
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 5,
        lineTension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.datasets.map((dataset) => {
        const newDataPoint = generateRandomFrequency();
        const updatedData = dataset.data.slice(-4);
        updatedData.push(newDataPoint);
        return { ...dataset, data: updatedData };
      });

      const newLabels = data.labels.slice(-4);
      const newLabel = `${parseInt(data.labels[data.labels.length - 1]) + 1}s`;
      newLabels.push(newLabel);

      setData({
        datasets: newData,
        labels: newLabels,
      });
    }, 1000); // change data every 1s

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default FrequencyChart;
