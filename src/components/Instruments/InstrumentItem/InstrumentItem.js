import React, { useState } from "react";
import Settings from "../Settings/Settings";
import "./InstrumentItem.css";
import Card from "../../UI/Card";

function InstrumentItem(props) {
  //Define state variables
  const [name, setName] = useState(props.instrument.name);
  const [setting, setSetting] = useState(false);
  //Define Handlers
  const clickHandler = () => {
    // setName("Updated!");
    if (setting) {
      setSetting(false);
    } else {
      setSetting(true);
    }

    console.log(name);
  };

  const submitSettingHandler = (settingsData) => {
    console.log("In InstrumentItem.js");
    console.log(settingsData);
    setSetting(false);
  };
  //Define Body of the Description
  const description = (
    <Card className="instrument-item">
      <div className="instrument-item__price">{props.instrument.address}</div>
      <div className="instrument-item__description">
        <h2>{name}</h2>
        <div>{props.instrument.model}</div>
      </div>
      <button className="button" onClick={clickHandler}>
        Change Settings
      </button>
    </Card>
  );
  //Optional Settings Display upon settings state change
  const settings = <Settings onSubmitSetting={submitSettingHandler} />;
  //Condition rendering for return statement
  if (setting) {
    return (
      <Card>
        {description}
        {settings}
      </Card>
    );
  } else {
    return <Card>{description}</Card>;
  }
}

export default InstrumentItem;
