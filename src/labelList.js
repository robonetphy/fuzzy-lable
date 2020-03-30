import React from "react";
import Label from "./previewLabel";
const LabelList = props => (
  <div className="label-sublist-container">
    <Label labelName={props.labelName} labelColor={props.labelColor}></Label>
    <div className="label-sublist-description">{props.labelDescription}</div>
    <div
      className="label-sublist-delete"
      onClick={props.deleteLabel}
      data-labelname={props.labelName}
    >
      Delete
    </div>
  </div>
);
export default LabelList;
