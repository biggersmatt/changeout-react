import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Draggable } from "react-beautiful-dnd";
import FlankA from "../Flanks/FlankA";
import FlankB from "../Flanks/FlankB";
require("./EndcapCard.css")

function EndcapCard(props) {
  const [change, setChange] = useState(props.endcap.change)

  const flankA = {
    title: props.flankA ? props.flankA.title : "",
  }

  const flankB = {
    title: props.endcap.flankB ? props.endcap.flankB.title : "",
  }

  const handleToggleEndcap = (endcap) => {
    const updatedChange = !change;
    const updatedEndcap = {
      ...endcap,
      change: updatedChange,
    }
    fetch(`http://localhost:5000/endcaps/${endcap._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEndcap),
    })
    .then(() => setChange(updatedEndcap.change))
    .catch((err) => console.log(err));
  }



  console.log("EndcapCard");
  return (
    // <Draggable draggableId={props.endcap._id} index={props.index}>
      // {(provided, snapshot) => (
        <div className="endcap-flank-container"
          // {...provided.draggableProps}
          // {...provided.dragHandleProps}
          // ref={provided.innerRef}
        >
          <FlankA 
            endcap={props.endcap} 
            flankA={props.flankA} 
            handleToggleFlank={props.handleToggleFlank}
          />
          <div 
            className={`endcap-card shadow ${change && "yellow"}`} 
            id={
              (flankA.title && flankB.title ? "nothing" : null) ||
              (flankA.title ? "endcap-flank-a": "") || 
              (flankB.title ? "endcap-flank-b" : "") 
            }
          >
            <h3 className="endcap-card-title">{props.endcap.title}</h3>
            <p className="endcap-card-item">{props.endcap.itemOne}</p>
            <p className="endcap-card-item">{props.endcap.itemTwo}</p>
            <p className="endcap-card-item">{props.endcap.itemThree}</p>
            <p className="endcap-card-item">{props.endcap.itemFour}</p>
            <p className="endcap-card-item">{props.endcap.itemFive}</p>
            <p className="endcap-card-item">{change}</p>
            <div className="endcap-card-btns">
              <Link to={`/edit/${props.endcap._id}`}>
                <p className={change ? "endcap-edit-completed" : "endcap-edit-change"}>Edit Info</p>
              </Link>
              <div>
                <p 
                  className={change ? "endcap-completed" : "endcap-change"}
                  // onClick={() => props.handleToggleEndcap(props.endcap.change, props.endcap._id)}
                  onClick={() => handleToggleEndcap(props.endcap)}
                >
                  {change ? "Complete" : "Change"}
                </p>
              </div>
            </div>
          </div>
          <FlankB 
            endcap={props.endcap} 
            flankB={props.flankB} 
            handleToggleFlank={props.handleToggleFlank}
          />
        </div>
      // )}
    // </Draggable>
    )
}

export default EndcapCard;