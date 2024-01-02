import React, { useState } from "react";
const FunctionSelect = (props) => {
  const [measurement, setMeasurement] = useState(props.measurement);
  const [methods, setMethods] = useState([]);
  const handleInstrumentChange = (event) => {
    const result = event.target.value;
    console.log("In Measurements.js");
    console.log(props.instruments);
    console.log(result);
    let updatedInstrument = props.instruments[result - 1];
    console.log(updatedInstrument);
    const updatedRows = [{ ...measurement, instrument: updatedInstrument }];
    fetchMethodsHandler(updatedInstrument);
    setMeasurement(updatedRows);
    props.updateMeasurementsHandler(updatedRows);
  };
  const handleInputChange = (event) => {
    const { name, result } = event.target;
    const updatedRows = [{ ...measurement, value: result }];
    setMeasurement(updatedRows);
    props.updateMeasurementsHandler(updatedRows);
  };
  function fetchMethodsHandler(instrument) {
    fetch(
      "http://127.0.0.1:5000/api/instruments/" +
        instrument.id +
        "/" +
        instrument.name +
        "/" +
        instrument.model +
        "/" +
        instrument.address
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (JSON.stringify(methods) !== JSON.stringify(data.methodParams)) {
          setMethods(data.methods);
          console.log(data.methods);
        }
      });
  }

  return (
    <div className="instrument-row" key={measurement.id}>
      <select
        onChange={(event) => handleInstrumentChange(event)}
        name="instrument"
        defaultValue={measurement.instrument}
      >
        {props.instruments.map((x) => (
          <option value={x.id}>
            {x.name} {x.model}
          </option>
        ))}
        {/* Add more options as needed */}
      </select>

      <select name="function" defaultValue={measurement.function}>
        <option value="source">Source</option>
        <option value="measure">Measure</option>
      </select>

      <select name="method" defaultValue={measurement.method}>
        {methods.map((x) => (
          <option value={x}>{x}</option>
        ))}
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        placeholder={measurement.value}
        onChange={(event) => handleInputChange(event)}
      />
    </div>
  );
};

export default FunctionSelect;
