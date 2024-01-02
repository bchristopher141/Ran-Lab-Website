import React from "react";
import Card from "../../UI/Card";
import FunctionSelect from "./FunctionSelect/FunctionSelect";

const ComponentA = (props) => {
  return (
    <Card className="component-a">
      This is where measurement parameters will be entered
      <FunctionSelect instruments={props.instruments} />
      {/* Your Component A content goes here */}
    </Card>
  );
};

export default ComponentA;
