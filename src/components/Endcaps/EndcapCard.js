import React from "react";
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import FlankA from "../Flanks/FlankA";
import FlankB from "../Flanks/FlankB";
require("./EndcapCard.css")

class EndcapCard extends React.Component {
  render() {
    const flankA = {
      title: this.props.flankA ? this.props.flankA.title : "",
    }

    const flankB = {
      title: this.props.endcap.flankB ? this.props.endcap.flankB.title : "",
    }
    console.log("EndcapCard");
    return (
      <Draggable draggableId={this.props.endcap._id} index={this.props.index}>
        {(provided, snapshot) => (
          <div className="endcap-flank-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <FlankA 
              endcap={this.props.endcap} 
              flankA={this.props.flankA} 
              handleToggleFlank={this.props.handleToggleFlank}
            />
            <div 
              className={`endcap-card shadow ${this.props.endcap.change && "yellow"}`} 
              id={
                (flankA.title && flankB.title ? "nothing" : null) ||
                (flankA.title ? "endcap-flank-a": "") || 
                (flankB.title ? "endcap-flank-b" : "") 
              }
            >
              <h3 className="endcap-card-title">{this.props.endcap.title}</h3>
              <p className="endcap-card-item">{this.props.endcap.itemOne}</p>
              <p className="endcap-card-item">{this.props.endcap.itemTwo}</p>
              <p className="endcap-card-item">{this.props.endcap.itemThree}</p>
              <p className="endcap-card-item">{this.props.endcap.itemFour}</p>
              <p className="endcap-card-item">{this.props.endcap.itemFive}</p>
              <p className="endcap-card-item">{this.props.endcap.change}</p>
              <div className="endcap-card-btns">
                <Link to={`/edit/${this.props.endcap._id}`}>
                  <p className={this.props.endcap.change ? "endcap-edit-completed" : "endcap-edit-change"}>Edit Info</p>
                </Link>
                <div>
                  <p 
                    className={this.props.endcap.change ? "endcap-completed" : "endcap-change"}
                    onClick={() => this.props.handleToggleEndcap(this.props.endcap.change, this.props.endcap._id)}
                  >
                    {this.props.endcap.change ? "Complete" : "Change"}
                  </p>
                </div>
              </div>
            </div>
            <FlankB 
              endcap={this.props.endcap} 
              flankB={this.props.flankB} 
              handleToggleFlank={this.props.handleToggleFlank}
            />
          </div>
        )}
      </Draggable>
    )
  }
}

export default EndcapCard;