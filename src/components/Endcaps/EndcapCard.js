import { Link } from 'react-router-dom';
require('./Endcap.css')

const EndcapCard = (props) => {
  return (
    <div className="endcap-card">
      <h3>{props.endcap.title}</h3>
      <p>{props.endcap.itemOne}</p>
      <button onClick={() => props.deleteEndcap(props.endcap._id)}>Delete</button>{' '}
      <Link to={`/edit/${props.endcap._id}`}><button>Edit</button></Link>
    </div>
  )
}

export default EndcapCard