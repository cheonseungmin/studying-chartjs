import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function App() {
  const chartRef = useRef();
  const [data, setData] = useState([]);

  const chartData = {
    datasets: [
      {
        label: 'count',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data,
      },
    ],
  };

  const options = {
    responsive: false,
  };

  const addData = () => {
    setData([
      ...data,
      {
        x: String(new Date().getTime()),
        y: Math.floor(Math.random() * 100),
      },
    ]);
  };

  useEffect(() => {
    window.setTimeout(() => {
      addData();
    }, 2000);
  }, [data]);

  return (
    <>
      <Line
        ref={chartRef}
        data={chartData}
        options={options}
        width={800}
        height={500}
      />
      <button
        type="button"
        onClick={addData}
      >
        addData
      </button>
    </>
  );
}

export default App;
