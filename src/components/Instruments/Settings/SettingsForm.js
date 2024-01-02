import React, { useState } from "react";
import "./SettingsForm.css";

const SettingsForm = (props) => {
  // Define State Variable
  const [userInput, setUserInput] = useState({
    settingValue: "setting value",
    name: "name",
    model: "model"
  });
  // Define Handlers
  const settingChangeHandler = (value) => {
    setUserInput((prevState) => {
      return { ...prevState, settingValue: value };
    });
  };
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "Voltage Range") {
      settingChangeHandler(value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredSettingsData = {
      settingValue: userInput.settingValue
    };

    props.onSaveSettingsData(enteredSettingsData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="settings__controls">
        <div className="settings__contol">
          <label>Voltage Range : </label>
          <input
            type="text"
            value={userInput.settingValue}
            onChange={(event) =>
              inputChangeHandler("Voltage Range", event.target.value)
            }
          />
        </div>
        {/* <div className="settings__contol">
          <label>Current Range : </label>
          <input type="number" value="100" min="0.01" step="0.01" />
        </div> */}
      </div>
      <div className="settings__actions">
        <button type="submit">Update Settings</button>
      </div>
    </form>
  );
};

export default SettingsForm;
