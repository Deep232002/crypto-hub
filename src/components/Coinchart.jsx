import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { HistoricalChart } from "../api/api";
import { DataContext } from "../context/DataContext";
import { Line } from "react-chartjs-2";
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
import { useParams } from "react-router-dom";
import { day } from "./Daybutton";
import Chartbuttons from "./Chartbuttons";
import Loader from "./Loader";

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Coinchart() {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const { currency } = useContext(DataContext);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(HistoricalChart(id, days, currency));
      setHistoricData(data.prices);
      console.log(data.prices);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currency, days]);

  return (
    <div className="w-full h-full flex flex-col">
    <div className="min-w-full  lg:w-[70%] lg:h-[70vh] md:w-[90%] p-4 flex flex-col justify-center items-center">
      {historicData.length === 0 ? (
        <Loader/>
      ) : (
        <>
        <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let hours = date.getHours();
              let time = `${hours % 12 || 12}:${date
                .getMinutes()
                .toString()
                .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price (Past ${days} Days) in ${currency}`,
                borderColor: "#EEBC1D",
                fill: false,
              },
            ],
          }}
          options={{
            responsive: true, // Ensures the chart is responsive
            maintainAspectRatio: false, // Adjusts the height based on container
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
        </>
      )}
    </div>
      <div className="w-full flex justify-around my-5 gap-5 ">
        {day.map((data, index)=><Chartbuttons data={data} key={index} onClick={()=>setDays(data.days)} selected={data.days===days}/>)}
      </div>
    </div>
  );
}

export default Coinchart;
