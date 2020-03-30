import React from "react";
const Label = props => (
  <span
    className="label-preview-container"
    style={{ background: `${props.labelColor}` }}
  >
    {props.labelName || `Label preview`}
  </span>
);
export default Label;
