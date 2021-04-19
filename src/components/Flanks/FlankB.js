import React, { useState } from "react";
import { Link } from "react-router-dom";
require("./Flanks.css");

function FlankB(props) {
  const flankB = {
    id: props.endcap.flankB ? props.endcap.flankB._id: "",
    title: props.endcap.flankB ? props.endcap.flankB.title : "",
    itemOne: props.endcap.flankB ? props.endcap.flankB.itemOne : "",
    itemTwo: props.endcap.flankB ? props.endcap.flankB.itemTwo: "",
    itemThree: props.endcap.flankB ? props.endcap.flankB.itemThree : "",
    itemFour: props.endcap.flankB ? props.endcap.flankB.itemFour : "",
    itemFive: props.endcap.flankB ? props.endcap.flankB.itemFive : "",
    change: props.endcap.flankB ? props.endcap.flankB.change : "",
    side: props.endcap.flankB ? props.endcap.flankB.side : "",
  }

  const [change, setChange] = useState(flankB.change)

  const handleToggleFlank = (flank) => {
    const updatedChange = !change;
    const updatedFlank = {
      ...flank,
      change: updatedChange,
    }
    fetch(`http://localhost:5000/flanks/${flank._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFlank),
    })
    .then(() => setChange(updatedFlank.change))
    .catch((err) => console.log(err));
  }

  return (
    <div 
      className={`shadow ${change ? "flank-yellow" : "flank-green"}`} 
      id={!flankB.title ? "hidden" : null}
    >
      <h4 className="flank-title">{flankB.title}</h4>
      <p className="flank-item">{flankB.itemOne}</p>
      <p className="flank-item">{flankB.itemTwo}</p>
      <p className="flank-item">{flankB.itemThree}</p>
      <p className="flank-item">{flankB.itemFour}</p>
      <p className="flank-item">{flankB.itemFive}</p>
      <div className="flank-btns">
        <Link to={`/edit/${props.endcap._id}/flank/${flankB.id}`}>
          <h4 className={change ? "flank-edit-completed" : "flank-edit-change"}>Edit Info</h4>
        </Link>
        <div>
          <h4 
            className={change ? "flank-completed" : "flank-change"}
            onClick={() => handleToggleFlank(props.endcap.flankB)
            }
          >
            {change ? "Finish" : "Change"}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default FlankB;