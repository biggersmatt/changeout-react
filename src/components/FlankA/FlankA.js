import { Link } from 'react-router-dom';

const FlankA = (props) => {
  const flankA = {
    id: props.flankA ? props.flankA._id: '',
    title: props.flankA ? props.flankA.title : '',
    itemOne: props.flankA ? props.flankA.itemOne : '',
    itemTwo: props.flankA ? props.flankA.itemTwo: '',
    itemThree: props.flankA ? props.flankA.itemThree : '',
    itemFour: props.flankA ? props.flankA.itemFour : '',
    itemFive: props.flankA ? props.flankA.itemFive : '',
    change: props.flankA ? props.flankA.change : '',
    side: props.flankA ? props.flankA.side : '',
  }

  return (
    <div className={flankA.change ? 'flank-yellow' : 'flank-green'} id={!flankA.title ? 'hidden' : null}>
      <h4>{flankA.title}</h4>
      <p>{flankA.itemOne}</p>
      <p>{flankA.itemTwo}</p>
      <p>{flankA.itemThree}</p>
      <p>{flankA.itemFour}</p>
      <p>{flankA.itemFive}</p>
      <div className="endcap-card-btns">
        <Link to={`/edit/${props.endcap._id}/flank/${flankA.id}`}>
        <h4 className={flankA.change ? 'flank-edit-completed' : 'flank-edit-change'}>Edit</h4>
        </Link>
        <div>
          <h4 
            className={flankA.change ? 'flank-completed' : 'flank-change'}
            onClick={() => this.props.handleToggleFlank(flankA.change, this.props.endcap.flankA)}
          >
            {flankA.change ? 'Complete' : 'Change'}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default FlankA;