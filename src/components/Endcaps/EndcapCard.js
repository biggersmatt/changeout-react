const EndcapCard = (props) => {
  return (
    <>
      <div>{props.endcap.title}</div>
      <button onClick={() => props.deleteEndcap(props.endcap._id)}>Delete</button>{' '}
      <button>Update</button>
      <hr />
    </>
  )
}

export default EndcapCard