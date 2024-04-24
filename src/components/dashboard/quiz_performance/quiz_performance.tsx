import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },

    title: {
      display: false,
      text: 'Quiz Performance',
    },
  },
};
  
const labels = ['Bio', 'Chem', 'Phy', 'Eng', 'Econ', 'Sci', 'Lit'];
  
export const data = {
  labels,
  datasets: [
    {
      label: 'Score %',
      data: [90,80,60,30,35,60,75,97],
      backgroundColor: 'rgba(53, 162, 235, 0.9)',
    }
  ],
};


export default function QuizPerformanceChart() {
    return (
      <>
        <Bar options={options} data={data} style={{position:"relative"}}/>
      </>
    )
}