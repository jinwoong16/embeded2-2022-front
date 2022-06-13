import React from "react";
import "./TempHum.css";

type TempHumProps = {
  temp: string;
  hum: string;
};

const TempHum = ({ temp, hum }: TempHumProps) => {
  return (
    <div className="TempHum">
      <div className="box">
        <p>{temp}</p>
        <p>{hum}</p>
      </div>
    </div>
  );
};

export default TempHum;
