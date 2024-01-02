import "./Instruments.css";
import Card from "../UI/Card";
import InstrumentItem from "./InstrumentItem";

function Instruments(props) {
  return (
    <Card className="instruments">
      {props.instruments.map((x) => (
        <InstrumentItem instrument={x}></InstrumentItem>
      ))}
    </Card>
  );
}

export default Instruments;
