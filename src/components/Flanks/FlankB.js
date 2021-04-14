import { Link } from "react-router-dom";
require("./Flanks.css");

const FlankB = (props) => {
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

  return (
    <div className={`shadow ${flankB.change ? "flank-yellow" : "flank-green"}`} id={!flankB.title ? "hidden" : null}>
      <h4 className="flank-title">{flankB.title}</h4>
      <p className="flank-item">{flankB.itemOne}</p>
      <p className="flank-item">{flankB.itemTwo}</p>
      <p className="flank-item">{flankB.itemThree}</p>
      <p className="flank-item">{flankB.itemFour}</p>
      <p className="flank-item">{flankB.itemFive}</p>
      <div className="flank-btns">
        <Link to={`/edit/${props.endcap._id}/flank/${flankB.id}`}>
          <h4 className={flankB.change ? "flank-edit-completed" : "flank-edit-change"}>Edit Info</h4>
        </Link>
        <div>
          <h4 
            className={flankB.change ? "flank-completed" : "flank-change"}
            onClick={() => props.handleToggleFlank(
              flankB.change, 
              props.flankB)
            }
          >
            {flankB.change ? "Complete" : "Change"}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default FlankB;