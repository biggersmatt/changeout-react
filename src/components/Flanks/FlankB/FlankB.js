import { Link } from 'react-router-dom';

const FlankB = (props) => {
  const flankB = {
    id: props.endcap.flankB ? props.endcap.flankB._id: '',
    title: props.endcap.flankB ? props.endcap.flankB.title : '',
    itemOne: props.endcap.flankB ? props.endcap.flankB.itemOne : '',
    itemTwo: props.endcap.flankB ? props.endcap.flankB.itemTwo: '',
    itemThree: props.endcap.flankB ? props.endcap.flankB.itemThree : '',
    itemFour: props.endcap.flankB ? props.endcap.flankB.itemFour : '',
    itemFive: props.endcap.flankB ? props.endcap.flankB.itemFive : '',
    change: props.endcap.flankB ? props.endcap.flankB.change : '',
    side: props.endcap.flankB ? props.endcap.flankB.side : '',
  }

  return (
    <div className={flankB.change ? 'flank-yellow' : 'flank-green'} id={!flankB.title ? 'hidden' : null}>
      <h4>{flankB.title}</h4>
      <p>{flankB.itemOne}</p>
      <p>{flankB.itemTwo}</p>
      <p>{flankB.itemThree}</p>
      <p>{flankB.itemFour}</p>
      <p>{flankB.itemFive}</p>
      <div className="endcap-card-btns">
        <Link to={`/edit/${props.endcap._id}/flank/${flankB.id}`}>
        <h4 className={flankB.change ? 'flank-edit-completed' : 'flank-edit-change'}>Edit</h4>
        </Link>
        <div>
          <h4 
            className={flankB.change ? 'flank-completed' : 'flank-change'}
            onClick={() => props.handleToggleFlank(
              flankB.change, 
              props.flankB)
            }
          >
            {flankB.change ? 'Complete' : 'Change'}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default FlankB;