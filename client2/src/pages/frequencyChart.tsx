import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { BiSad, BiHappyBeaming } from "react-icons/bi";
import { Box, Button, Icon } from "@chakra-ui/react";
import { Text, Heading } from "@chakra-ui/react";
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
const { forwardRef, useRef, useImperativeHandle } = React;

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
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Frequency/Time Line Chart",
      font: {
        size: 16,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Time (s)",
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
        text: "Frequency (Hz)",
        font: {
          size: 12,
        },
      },
    },
  },
};

const FrequencyChart = forwardRef((props, ref) => {
  const [currentFrequecy, setCurrentFrequency] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false); // Initially, Graph not moving
  const [currentTimer, setCurrentTimer] = useState(0);
  const [data, setData] = useState({
    labels: ["0s", "1s"],
    datasets: [
      {
        data: [30, 30],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        lineTension: 0.4,
      },
    ],
  });
  function incrementDecrementNumber(number, time) {
    let randomValue = Math.random() * 0.5 + 0.5; // random value between 0.5 and 1
    if (randomValue > 0.7) randomValue = -randomValue; // random value between -1 and 1 (random sign
    const increment = time <= 50 ? randomValue : -Math.abs(randomValue); // increment or decrement depending on time
    const newNumber = number + increment; // apply the increment/decrement

    return newNumber < 5 ? 5 : newNumber; // ensure the number is not lower than 5
  }
  useEffect(() => {
    let interval;
    if (isPlaying) {
      // if playing, then start the graph
      interval = setInterval(() => {
        const newData = data.datasets.map((dataset) => {
          setCurrentTimer(currentTimer + 1);
          const newDataPoint = incrementDecrementNumber(
            currentFrequecy,
            currentTimer
          );
          setCurrentFrequency(newDataPoint);
          const updatedData = dataset.data.slice(-4);
          updatedData.push(newDataPoint);
          return { ...dataset, data: updatedData };
        });
        const newLabels = data.labels.slice(-4);
        const newLabel = `${
          parseInt(data.labels[data.labels.length - 1]) + 1
        }s`;
        newLabels.push(newLabel);

        setData({
          datasets: newData,
          labels: newLabels,
        });
      }, 1000); // change data every 1s
    }
    return () => clearInterval(interval); // DO NOT DELETE; Apparently, removing this line breaks the code
  }, [data, isPlaying]); // Added "isPlaying" to the dependencies of the useEffect Hook to detect change of state of "isPlaying"

  // Add a function to start the graph
  useImperativeHandle(ref, () => ({
    startGraph() {
      setIsPlaying(true);
    },
    stopResetGraph() {
      setIsPlaying(false);
      // The following lines are to reset the graph
      setCurrentTimer(0);
      setCurrentFrequency(30);
      setData({
        labels: ["0s", "1s"],
        datasets: [
          {
            data: [30, 30],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            pointRadius: 5,
            lineTension: 0.4,
          },
        ],
      });
    },
  }));

  // Add a function to stop and reset the graph

  return (
    <Box display="flex" mt="10px">
      <Box style={{ width: "400px", height: "300px" }}>
        <Line data={data} options={options} />

        {/* Two buttons added for TESTING purposes
        <Button onClick={startGraph}>Start</Button>
        <Button onClick={stopResetGraph}>Stop</Button> */}
      </Box>
      <Box height="300px" ml="12" textAlign="center">
        <Heading as="h2" size="xl" textAlign="center">
          State
        </Heading>
        {/* if currenFrequency is bigger than 15 */}
        {currentFrequecy > 15 && (
          <>
            <Icon as={BiSad} height="150px" width="150px" />
            <Text textAlign="center">Stressed, angry, down</Text>
            <Text textAlign="center">{currentFrequecy.toPrecision(4)} Hz</Text>
          </>
        )}
        {/* if currenFrequency is smaller than 15 */}
        {currentFrequecy <= 15 && (
          <>
            <Icon as={BiHappyBeaming} height="150px" width="150px" />
            <Text textAlign="center">Happy, relaxed, enjoying</Text>
            <Text textAlign="center">{currentFrequecy.toPrecision(4)} Hz</Text>
          </>
        )}
      </Box>
    </Box>
  );
});

export default FrequencyChart;
