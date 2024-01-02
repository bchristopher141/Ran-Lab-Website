import React from "react";
import Plotly from "react-plotly.js";
import "./PlotPanel.css";
import Card from "../../UI/Card";

const PlotPanel = () => {
  // Sample data for testing
  const liveData = {
    x: [1, 2, 3, 4, 5],
    y: [2, 4, 3, 5, 7],
    mode: "lines+markers",
    type: "scatter",
    name: "Dummy Data1"
  };

  const archivedData = {
    x: [1, 2, 3, 4, 5],
    y: [1, 3, 2, 4, 6],
    mode: "lines+markers",
    type: "scatter",
    name: "Dummy Data2"
  };

  return (
    <Card className="live-plot-container">
      <Plotly
        className="live-plot"
        data={[liveData, archivedData]}
        layout={{
          title: "Dummy Plot",
          xaxis: { title: "X-axis" },
          yaxis: { title: "Y-axis" },
          responsive: true,
          margin: { t: 50, r: 0, b: 0, l: 0 }, // Set all margins to 0
          bordercolor: "#333",
          borderwidth: 2,
          width: 500,
          height: 300
        }}
      />
    </Card>
  );
};

export default PlotPanel;
