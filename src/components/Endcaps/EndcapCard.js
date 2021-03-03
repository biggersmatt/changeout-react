import { Link } from 'react-router-dom';

const EndcapCard = (props) => {
  return (
    <>
      <div>
        <h3>{props.endcap.title}</h3>
        <p>{props.endcap.itemOne}</p>
      </div>
      <button onClick={() => props.deleteEndcap(props.endcap._id)}>Delete</button>{' '}
      <Link to={`/edit/${props.endcap._id}`}><button>Edit</button></Link>
      <hr />
    </>
  )
}

export default EndcapCard