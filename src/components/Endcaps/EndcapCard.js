import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlankA from "../Flanks/FlankA";
import FlankB from "../Flanks/FlankB";
require("./EndcapCard.css")

function EndcapCard(props) {
  const [change, setChange] = useState(props.endcap.change)

  const flankA = {
    title: props.endcap.flankA ? props.endcap.flankA.title : "",
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

  return (
    <div className="endcap-flank-container">
      <FlankA endcap={props.endcap} />
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
              onClick={() => handleToggleEndcap(props.endcap)}
            >
              {change ? "Finish" : "Change"}
            </p>
          </div>
        </div>
      </div>
      <FlankB endcap={props.endcap} />
    </div>
  )
}

export default EndcapCard;