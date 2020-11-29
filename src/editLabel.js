import React from "react";
import Label from "./previewLabel";
class EditLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelName: this.props.labelName || "",
      labelColor: this.props.labelColor,
      labelDescription: this.props.labelDescription || "",
      labelColorList: this.props.labelColorList,
    };
  }

  getColor = () => {
    if (!this.state.labelColorList.length)
      return "#" + ((Math.random() * 0xffffff) << 0).toString(16);

    while (true) {
      let color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      if (
        !this.state.labelColorList.some((item) => {
          return color === item;
        })
      )
        return color;
    }
  };

  render() {
    return (
      <div>
        <div className="label-create-container">
          <Label
            labelName={this.state.labelName}
            labelColor={this.state.labelColor}
          ></Label>
          <div className="label-input-form">
            <div className="label-input-container">
              <label htmlFor="Labelname">Label name</label>
              <input
                type="text"
                name="Labelname"
                className="label-input-control"
                placeholder="Label name"
                value={this.state.labelName}
                onChange={(event) => {
                  this.setState({
                    labelName: event.target.value,
                  });
                }}
              />
            </div>
            <div className="label-input-container label-description-container-width">
              <label htmlFor="Labelname">Description</label>
              <input
                type="text"
                name="Labelname"
                className="label-input-control"
                placeholder="Description (optional)"
                value={this.state.labelDescription}
                onChange={(event) => {
                  this.setState({
                    labelDescription: event.target.value,
                  });
                }}
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="Labelname">Color</label>
              <button
                className="label-input-control label-btn"
                onClick={(event) => {
                  this.setState({
                    labelColor: this.getColor(),
                  });
                }}
                style={{ background: this.state.labelColor, color: `white` }}
              >
                <i className="fas fa-sync"></i>
              </button>
            </div>
            <div className="label-input-container label-color-container-width">
              <input
                type="text"
                name="Labelname"
                className="label-input-control"
                value={this.state.labelColor}
                onChange={(event) => {
                  this.setState({
                    labelColor: event.target.value,
                  });
                }}
              />
            </div>
            <div className="label-input-container">
              <button className="label-input-control label-btn">Cancel</button>
            </div>
            <div className="label-input-container label-createbtn-container">
              <button
                className="label-input-control label-btn-primary"
                disabled={this.state.labelName === "" ? true : false}
                onClick={() => {
                  this.props.handleBtnEvent(
                    this.state.labelName,
                    this.state.labelColor,
                    this.state.labelDescription
                  );
                }}
              >
                Create Label
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditLabel;
