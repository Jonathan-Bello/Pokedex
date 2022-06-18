import { ProgressBar } from "react-bootstrap";

const Stat = (props: iStat) => {
  return (
    <div className="row mb-1">
      <div className="col-3">
        <div className="stat__name">
          <span>{props.name}</span>
        </div>
      </div>
      <div className="stat__progresscontainer col-2">
        <span className="stat__value">{props.value}</span>
      </div>
      <div className="col-7">
        <ProgressBar max={300} now={props.value} variant="success" />
      </div>
    </div>
  );
};

export default Stat;

interface iStat {
  name: string;
  value: number;
}
