import React from "react";
import "./createLabel.css";
import EditLabel from "./editLabel";
import LabelList from "./labelList";
class CreateLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelList: [],
    };
  }
  getColor = () => {
    if (!this.state.labelList.length)
      return "#" + ((Math.random() * 0xffffff) << 0).toString(16);

    while (true) {
      let color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      if (
        !this.state.labelList.some((labelList) => {
          return color === labelList.labelColor;
        })
      )
        return color;
    }
  };
  handleDeleteLabel = (event) => {
    if (
      window.confirm(
        `Do you want to delete label ${event.target.dataset.labelname} ?`
      )
    ) {
      let filterLabelList = this.state.labelList.filter((item, index) => {
        return item.labelName === event.target.dataset.labelname ? false : true;
      });
      this.setState({
        labelList: filterLabelList,
      });
    }
  };
  handleCreateLable = (labelName, labelColor, labelDescription) => {
    if (
      this.state.labelList.some((labelList) => {
        return labelList.labelName === labelName;
      })
    ) {
      window.alert("Can't Have Duplicate Flages");
    } else {
      let preLableList = [...this.state.labelList];
      preLableList.push({
        labelColor: labelColor,
        labelDescription: labelDescription,
        labelName: labelName,
      });
      this.setState({
        labelList: preLableList,
      });
    }
  };
  render() {
    return (
      <div>
        <EditLabel
          handleBtnEvent={this.handleCreateLable}
          labelColor={this.getColor()}
          labelColorList={this.state.labelList.map((item, index) => {
            console.log("I am Running");
            return item.labelColor;
          })}
        ></EditLabel>
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
