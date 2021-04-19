import React, { useState } from "react";
import { Link } from "react-router-dom";
require("./Flanks.css");

function FlankA(props) {
  const flankA = {
    id: props.endcap.flankA ? props.endcap.flankA._id: "",
    title: props.endcap.flankA ? props.endcap.flankA.title : "",
    itemOne: props.endcap.flankA ? props.endcap.flankA.itemOne : "",
    itemTwo: props.endcap.flankA ? props.endcap.flankA.itemTwo: "",
    itemThree: props.endcap.flankA ? props.endcap.flankA.itemThree : "",
    itemFour: props.endcap.flankA ? props.endcap.flankA.itemFour : "",
    itemFive: props.endcap.flankA ? props.endcap.flankA.itemFive : "",
    change: props.endcap.flankA ? props.endcap.flankA.change : "",
    side: props.endcap.flankA ? props.endcap.flankA.side : "",
  }

  const [change, setChange] = useState(flankA.change)

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
      id={!flankA.title ? "hidden" : null}
    >
      <h4 className="flank-title">{flankA.title}</h4>
      <p className="flank-item">{flankA.itemOne}</p>
      <p className="flank-item">{flankA.itemTwo}</p>
      <p className="flank-item">{flankA.itemThree}</p>
      <p className="flank-item">{flankA.itemFour}</p>
      <p className="flank-item">{flankA.itemFive}</p>
      <div className="flank-btns">
        <Link to={`/edit/${props.endcap._id}/flank/${flankA.id}`}>
          <h4 className={change ? "flank-edit-completed" : "flank-edit-change"}>Edit Info</h4>
        </Link>
        <div>
          <h4 
            className={change ? "flank-completed" : "flank-change"}
            onClick={() => handleToggleFlank(props.endcap.flankA)
            }
          >
            {change ? "Finish" : "Change"}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default FlankA;