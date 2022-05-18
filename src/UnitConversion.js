import React from "react";

export default function UnitConversion(props) {
  return (
    <div className="UnitConversion">
      {" "}
      <strong className="temperature">{Math.round(props.imperial)}</strong>
      <span className="units">°F</span>
    </div>
  );
}
