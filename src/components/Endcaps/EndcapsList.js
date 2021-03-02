import EndcapCard from '../Endcaps/EndcapCard';

const EndcapsList = (props) => {
  return props.endcaps.map((endcap) => {
    return <EndcapCard endcap={endcap}/>
  })
}

export default EndcapsList;