import Instruments from "./components/Instruments/Instruments";
import MenuBar from "./components/MenuBar/MenuBar";
import Card from "./components/UI/Card";
import DataCollection from "./components/DataCollection/DataCollection";
import React, { useState } from "react";

function App() {
  const [instruments, setInstruments] = useState([]);
  const [content, setContent] = useState("Instruments");

  const handleMenuItemClick = (content) => {
    setContent(content);
  };
  function fetchInstrumentsHandler() {
    fetch("http://127.0.0.1:5000/api/instruments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (JSON.stringify(instruments) !== JSON.stringify(data.instruments)) {
          setInstruments(data.instruments);
          console.log(data.instruments);
        }
      });
  }
  fetchInstrumentsHandler();

  let renderedContent = <div>Hello</div>;

  if (content === "Instruments") {
    renderedContent = <Instruments instruments={instruments}></Instruments>;
  } else if (content === "Data Collection") {
    renderedContent = <DataCollection instruments={instruments} />;
  } else {
    renderedContent = <Instruments instruments={instruments}></Instruments>;
  }

  return (
    <Card>
      <MenuBar onMenuItemClick={handleMenuItemClick} />
      {renderedContent}
    </Card>
  );
}

export default App;
