import { Link } from 'react-router-dom';

const EndcapCard = (props) => {
  return (
    <>
      <div>{props.endcap.title}</div>
      <button onClick={() => props.deleteEndcap(props.endcap._id)}>Delete</button>{' '}
      <Link to={`/edit/${props.endcap._id}`}><button>Update</button></Link>
      <hr />
    </>
  )
}

export default EndcapCard