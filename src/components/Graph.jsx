import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import "./Graph.css"; // Import the CSS file

const fetchMetrics = async (metric, device) => {
  const response = await fetch(
    `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
  );
  const data = await response.json();
  return data;
};

const Graph = ({ metric, device, darkMode }) => {
  const [chartData, setChartData] = useState({ timeseries: [], values: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMetrics(metric, device);
      setChartData(data);
    };
    fetchData();
  }, [metric, device]);

  // Dynamically setting options based on dark mode
  const options = {
    xAxis: {
      type: "category",
      data: chartData.timeseries,
      axisLine: {
        lineStyle: {
          color: darkMode ? "#fff" : "#000",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: darkMode ? "#fff" : "#000",
        },
      },
    },
    series: [
      {
        data: chartData.values,
        type: "line",
        itemStyle: {
          color: darkMode ? "#ffeb3b" : "#2196f3", // Yellow for dark mode, blue for light mode
        },
        lineStyle: {
          color: darkMode ? "#ffeb3b" : "#2196f3",
        },
      },
    ],
    backgroundColor: darkMode ? "#333" : "#fff",
    textStyle: {
      color: darkMode ? "#fff" : "#000",
    },
  };

  return (
    <div className="graph-wrapper">
      <div className="graph-container">
        <ReactECharts className="echarts-container" option={options} />
      </div>
      {/* <div className="graph-container"> */}
        {/* <ReactECharts className="echarts-container" option={options} /> */}
      {/* </div> */}
    </div>
  );
};

export default Graph;


