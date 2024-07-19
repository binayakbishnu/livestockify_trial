import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Navbar from "../HomePageComponents/Navbar";
import backgroundImageClouds from "../../assets/livestockifyBGClouds.png";
import activeIcon from "../../assets/farmerhistory/activeIcon.svg";
import inactiveIcon from "../../assets/farmerhistory/inactiveIcon.svg";
import tempIcon from "../../assets/farmerhistory/tempIcon.svg";
import humidityIcon from "../../assets/farmerhistory/humidityIcon.svg";
import trendDownIcon from "../../assets/farmerhistory/trendDownIcon.svg";
import trendUpIcon from "../../assets/farmerhistory/trendUpIcon.svg";
import ammoniumIcon from "../../assets/farmerhistory/ammoniumIcon.svg";

function History() {
  const [dataTemp, setDataTemp] = useState([]);
  const [dataHumidity, setDataHumidity] = useState([]);
  const [dataAmmonia, setDataAmmonia] = useState([]);
  const [activeTime, setActiveTime] = useState("");
  const [percentageIncreases, setPercentageIncreases] = useState({});
  const [graphData, setGraphData] = useState(null);
  const [selectedType, setSelectedType] = useState("temperature");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [sensorActive, setSensorActive] = useState(false);

  const fetchData = async () => {
    try {
      const tempRes = await axios.get(
        "https://api.thingspeak.com/channels/2483390/fields/1.json"
      );
      const humidityRes = await axios.get(
        "https://api.thingspeak.com/channels/2483390/fields/2.json"
      );
      const ammoniaRes = await axios.get(
        "https://api.thingspeak.com/channels/2483390/fields/3.json"
      );

      setDataTemp(tempRes.data.feeds);
      setDataHumidity(humidityRes.data.feeds);
      setDataAmmonia(ammoniaRes.data.feeds);

      calculateActiveTime(tempRes.data.feeds);
      calculatePercentageIncreases(
        tempRes.data.feeds,
        humidityRes.data.feeds,
        ammoniaRes.data.feeds
      );

      const active = tempRes.data.feeds.length > 1;
      setSensorActive(active);

      const mostRecentMonth = getMostRecentMonthWithData([
        ...tempRes.data.feeds,
        ...humidityRes.data.feeds,
        ...ammoniaRes.data.feeds,
      ]);
      setSelectedMonth(mostRecentMonth);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculateActiveTime = (data) => {
    if (data.length < 2) {
      setActiveTime("");
      return;
    }

    const timestamps = data.map((entry) =>
      new Date(entry.created_at).getTime()
    );
    const minTimestamp = Math.min(...timestamps);
    const maxTimestamp = Math.max(...timestamps);
    const diffMs = maxTimestamp - minTimestamp;

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffHours >= 24) {
      const diffDays = Math.floor(diffHours / 24);
      const remainingHours = diffHours % 24;
      setActiveTime(
        `Active from last ${diffDays} Days ${remainingHours} Hours ${diffMinutes} mins`
      );
    } else {
      setActiveTime(`Active from last ${diffHours} Hours ${diffMinutes} mins`);
    }
  };

  const calculatePercentageIncreases = (
    tempData,
    humidityData,
    ammoniaData
  ) => {
    const calcIncrease = (latest, yesterday) =>
      ((latest - yesterday) / yesterday) * 100;

    const latestTemp = tempData[tempData.length - 1]?.field1;
    const latestHumidity = humidityData[humidityData.length - 1]?.field2;
    const latestAmmonia = ammoniaData[ammoniaData.length - 1]?.field3;

    const yesterdayTemp = tempData[tempData.length - 2]?.field1;
    const yesterdayHumidity = humidityData[humidityData.length - 2]?.field2;
    const yesterdayAmmonia = ammoniaData[ammoniaData.length - 2]?.field3;

    setPercentageIncreases({
      temperature: calcIncrease(latestTemp, yesterdayTemp),
      humidity: calcIncrease(latestHumidity, yesterdayHumidity),
      ammonia: calcIncrease(latestAmmonia, yesterdayAmmonia),
    });
  };

  const showGraph = (type) => {
    const dataMap = {
      temperature: dataTemp,
      humidity: dataHumidity,
      ammonia: dataAmmonia,
    };

    const filteredData = dataMap[type].filter((entry) => {
      const entryMonth = new Date(entry.created_at).toLocaleString("default", {
        month: "long",
      });
      return entryMonth === selectedMonth;
    });

    if (filteredData.length === 0) {
      setGraphData(null);
      return;
    }

    const labels = filteredData.map((entry) => entry.created_at);
    const values = filteredData.map(
      (entry) =>
        entry[
          `field${type === "temperature" ? 1 : type === "humidity" ? 2 : 3}`
        ]
    );

    setGraphData({
      labels,
      datasets: [
        {
          label: `${type.charAt(0).toUpperCase() + type.slice(1)} over Time`,
          data: values,
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    });

    setSelectedType(type);
  };

  const getMostRecentMonthWithData = (data) => {
    const recentEntry = data[data.length - 1];
    if (recentEntry) {
      return new Date(recentEntry.created_at).toLocaleString("default", {
        month: "long",
      });
    }
    return "";
  };

  useEffect(() => {
    fetchData();
    console.log("Done fetching data");
  }, []);

  useEffect(() => {
    if (selectedMonth && selectedType) {
      showGraph(selectedType);
    }
  }, [selectedMonth, selectedType]);

  const getAllMonths = () => {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  };

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center space-y-4 p-4 mt-16 h-full overflow-y-auto"
        style={{
          backgroundImage: `url(${backgroundImageClouds})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "screen",
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-col bg-white items-center justify-center mx-5 sm:mx-auto my-4 p-4 border border-gray-325 rounded shadow w-full max-w-screen-lg">
          {/* <img
            src={sensorActive ? activeIcon : inactiveIcon}
            alt={sensorActive ? "active" : "inactive"}
            className="w-5 h-5"
          />
          <h3 className="text-lg font-semibold ">
            {sensorActive ? "Sensor Active" : "Sensor Inactive"}
          </h3> 
          */}
          <img src={activeIcon} alt={"active"} className="w-5 h-5" />
          <h3 className="text-lg font-semibold ">{"Sensor Active"}</h3>
          <p className="mt-2 text-base text-black">{activeTime}</p>
          <p className="mt-2 text-base">House number 23</p>
        </div>

        <div className="flex flex-col  items-center justify-center mx-5 sm:mx-auto my-4 p-4  w-full max-w-screen-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-4 sm:space-y-0 sm:space-x-4">
            <div
              className={`p-4 w-full sm:w-1/3 rounded shadow cursor-pointer text-center border-2 ${
                selectedType === "humidity"
                  ? "text-white border-green "
                  : "bg-white "
              }`}
              onClick={() => showGraph("humidity")}
            >
              <center>
                <img src={humidityIcon} alt="humidity" className="w-5 h-5 " />
              </center>
              <h3 className="text-lg font-semibold text-gray-500">Humidity</h3>
              <p className="mt-2 text-2xl font-bold text-black">
                {dataHumidity[dataHumidity.length - 1]?.field2}%
              </p>
              <p className="text-base text-black">
                {percentageIncreases.humidity &&
                percentageIncreases.humidity.toFixed(2) > 0 ? (
                  <img
                    src={trendUpIcon}
                    alt="Trend Up"
                    className="inline w-5 h-5"
                  />
                ) : (
                  <img
                    src={trendDownIcon}
                    alt="Trend Down"
                    className="inline w-5 h-5"
                  />
                )}
                {Math.abs(percentageIncreases.humidity).toFixed(2)}%
              </p>
            </div>
            <div
              className={`p-4 w-full sm:w-1/3 rounded shadow cursor-pointer text-center border-2 ${
                selectedType === "temperature"
                  ? "text-white border-green"
                  : "bg-white "
              }`}
              onClick={() => showGraph("temperature")}
            >
              <center>
                <img src={tempIcon} alt="temperature" className="w-5 h-5 " />
              </center>
              <h3 className="text-lg font-semibold text-gray-500">
                Temperature
              </h3>
              <p className="mt-2 text-2xl font-bold text-black">
                {dataTemp[dataTemp.length - 1]?.field1}°C
              </p>
              <p className="text-base text-black">
                {percentageIncreases.temperature &&
                percentageIncreases.temperature.toFixed(2) > 0 ? (
                  <img
                    src={trendUpIcon}
                    alt="Trend Up"
                    className="inline w-5 h-5"
                  />
                ) : (
                  <img
                    src={trendDownIcon}
                    alt="Trend Down"
                    className="inline w-5 h-5"
                  />
                )}
                {Math.abs(percentageIncreases.temperature).toFixed(2)}%
              </p>
            </div>
            <div
              className={`p-4 w-full sm:w-1/3 rounded shadow cursor-pointer text-center border-2 ${
                selectedType === "ammonia"
                  ? "text-white border-green "
                  : "bg-white "
              }`}
              onClick={() => showGraph("ammonia")}
            >
              <center>
                <img src={ammoniumIcon} alt="ammonia" className="w-5 h-5 " />
              </center>
              <h3 className="text-lg font-semibold text-gray-500">Ammonia</h3>
              <p className="mt-2 text-2xl font-bold text-black">
                {dataAmmonia[dataAmmonia.length - 1]?.field3} ppm
              </p>
              <p className="text-base text-black">
                {percentageIncreases.ammonia &&
                percentageIncreases.ammonia.toFixed(2) > 0 ? (
                  <img
                    src={trendUpIcon}
                    alt="Trend Up"
                    className="inline w-5 h-5"
                  />
                ) : (
                  <img
                    src={trendDownIcon}
                    alt="Trend Down"
                    className="inline w-5 h-5"
                  />
                )}
                {Math.abs(percentageIncreases.ammonia).toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-screen-lg bg-white rounded shadow p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 sm:mb-0">
              {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
            </h2>
            <select
              className="w-full sm:w-auto border bg-white text-black border-gray-300 rounded px-2 py-1"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {getAllMonths().map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          {graphData ? (
            <Line data={graphData} />
          ) : (
            <div className="bg-white p-4 rounded-lg shadow-md w-full text-center">
              No data available for the selected month.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default History;
