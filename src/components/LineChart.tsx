import React from "react";
import { useQuery } from "react-query";
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
import { Line } from "react-chartjs-2";

type Props = {};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: false,
      text: "Graph showing the cases fluctuations",
      font: {
        size: 20,
      },
    },
  },
};

const fetchChartData = async () => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

const LineChart = (props: Props) => {
  const {
    isLoading,
    isError,
    data: covidData,
  } = useQuery("covidData", fetchChartData);

  const casesData =
    covidData &&
    Object.entries(covidData.cases).map(([key, value]) => ({
      x: key,
      y: value,
    }));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      {covidData && (
        <Line
          options={options}
          data={{
            labels: Object.keys(covidData.cases),
            datasets: [
              {
                label: "Cases",
                data: casesData,
                borderColor: "rgb(245, 158, 11)",
                backgroundColor: "rgba(245, 158, 11, 0.5)",
              },
            ],
          }}
        />
      )}
    </>
  );
};

export default LineChart;
