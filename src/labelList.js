import React from "react";
import Label from "./previewLabel";
const LabelList = props => (
  <div className="label-sublist-container">
    <div className="label-sublist-label-space">
      <Label labelName={props.labelName} labelColor={props.labelColor}></Label>
    </div>
    <div className="label-sublist-description-space">
      <div className="label-sublist-description">{props.labelDescription}</div>
    </div>
    <div className="label-sublist-action-space">
      <div className="label-sublist-edit" onClick={() => {}}>
        Edit
      </div>
      <div
        className="label-sublist-delete"
        onClick={() => {
          props.deleteLabel(props.labelKey);
        }}
      >
        Delete
      </div>
    </div>
  </div>
);
export default LabelList;
