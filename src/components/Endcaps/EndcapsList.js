import EndcapCard from "../Endcaps/EndcapCard";
require("./EndcapCard.css");

const EndcapsList = (props) => {
  return (
    <div>
      {props.endcaps.map((endcap, index) => {
        return <EndcapCard 
                  handleToggleEndcap={props.handleToggleEndcap}
                  handleToggleFlank={props.handleToggleFlank}
                  key={endcap._id} 
                  index={index} 
                  endcap={endcap}
                />
      })}
    </div>
  )
};

export default EndcapsList;
