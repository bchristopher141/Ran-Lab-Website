import React from "react";
import "./DataCollection.css";
import Card from "../UI/Card";
import EnvPanel from "./EnvPanel/EnvPanel";
import MeasurePanel from "./MeasurePanel/MeasurePanel";
import PlotPanel from "./PlotPanel/PlotPanel";

const DataCollectionPage = (props) => {
  return (
    <Card className="data-collection-page">
      <div className="two-column-layout">
        <MeasurePanel instruments={props.instruments} />
        <PlotPanel />
      </div>
      <EnvPanel />
    </Card>
  );
};

export default DataCollectionPage;
