import React, { useState } from "react";
import Measurement from "./Measurement/Measurement";
import Card from "../../../UI/Card";
import "./FunctionSelect.css";
const FunctionSelect = (props) => {
  const tempMeasurement = {
    key: 1,
    instrument: "Instrument",
    function: "Function",
    method: "Method",
    value: "Value"
  };
  const updateMeasurementHandler = (measurement) => {
    setMeasurements((prevRows) => {
      return prevRows.map((row) => {
        if (row.key === measurement.key) {
          return measurement; // Update the specific property
        }
        return row;
      });
    });
  };

  const [measurements, setMeasurements] = useState([tempMeasurement]);

  const addNewHandler = () => {
    setMeasurements([
      ...measurements,
      { ...tempMeasurement, key: measurements.length + 1 }
    ]);
    console.log("Add New");
  };

  return (
    <div>
      <button onClick={addNewHandler}>Add New</button>
      {measurements.map((x) => (
        <Measurement
          instruments={props.instruments}
          updateMeasurementsHandler={updateMeasurementHandler}
          key={x.id}
          measurement={x}
        ></Measurement>
      ))}
    </div>
  );
};

export default FunctionSelect;
