const EndcapsList = (props) => {
  return props.endcaps.map((endcap) => {
    return <div>{endcap.title}</div>
  })
}

export default EndcapsList;