import React from "react";
import "./createLabel.css";
import Label from "./previewLabel";
import LabelList from "./labelList";
class CreateLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelName: "",
      labelColor: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      labelDescription: "",
      labelList: []
    };
  }
  getColor = () => {
    if (!this.state.labelList.length)
      return "#" + ((Math.random() * 0xffffff) << 0).toString(16);

    while (true) {
      let color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      if (
        !this.state.labelList.some(labelList => {
          return color === labelList.labelColor;
        })
      )
        return color;
    }
  };
  handleDeleteLabel = labelKey => {
    if (
      window.confirm(
        `Do you want to delete label ${this.state.labelList[labelKey].labelName} ?`
      )
    ) {
      let filterLabelList = this.state.labelList.filter((item, index) => {
        return index === labelKey ? false : true;
      });
      this.setState({
        labelList: filterLabelList
      });
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
                onChange={event => {
                  this.setState({
                    labelName: event.target.value
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
                onChange={event => {
                  this.setState({
                    labelDescription: event.target.value
                  });
                }}
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="Labelname">Color</label>
              <button
                className="label-input-control label-btn"
                onClick={event => {
                  this.setState({
                    labelColor: this.getColor()
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
                onChange={event => {
                  this.setState({
                    labelColor: event.target.value
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
                  if (
                    this.state.labelList.some(labelList => {
                      return labelList.labelName === this.state.labelName;
                    })
                  ) {
                    window.alert("Can't Have Duplicate Flages");
                  } else {
                    let preLableList = [...this.state.labelList];
                    preLableList.push({
                      labelColor: this.state.labelColor,
                      labelDescription: this.state.labelDescription,
                      labelName: this.state.labelName
                    });
                    this.setState({
                      labelName: "",
                      labelDescription: "",
                      labelList: preLableList,
                      labelColor: this.getColor()
                    });
                  }
                }}
              >
                Create Label
              </button>
            </div>
          </div>
        </div>
        <div className="label-list-container">
          <div className="label-list-header-container">
            <div>{`${this.state.labelList.length} lables`}</div>
          </div>

          {this.state.labelList.map((item, index) => {
            return (
              <LabelList
                key={index}
                labelName={item.labelName}
                labelColor={item.labelColor}
                labelDescription={item.labelDescription}
                labelKey={index}
                deleteLabel={this.handleDeleteLabel}
              ></LabelList>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CreateLabel;
