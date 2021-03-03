import { Link } from 'react-router-dom';
require('./Endcap.css')

const EndcapCard = (props) => {
  return (
    <div className="endcap-card">
      <h3>{props.endcap.title}</h3>
      <p>{props.endcap.itemOne}</p>
      <p>{props.endcap.itemTwo}</p>
      <p>{props.endcap.itemThree}</p>
      <p>{props.endcap.itemFour}</p>
      <p>{props.endcap.itemFive}</p>
      <div>
        <Link to={`/edit/${props.endcap._id}`}>
          <button className="endcap-edit-btn">Edit</button>
        </Link>
        <div>
          <h4 className="endcap-change">Change</h4>
          <input type="checkbox" className="endcap-edit-checkbox"/>
        </div>
      </div>
    </div>
  )
}

export default EndcapCard