import EndcapCard from '../Endcaps/EndcapCard';

const EndcapsList = (props) => {
  return props.endcaps.map((endcap) => {
    return <EndcapCard key={endcap._id} endcap={endcap} />
  });
};

export default EndcapsList;