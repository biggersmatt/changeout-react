import { Link } from 'react-router-dom';

const FlankA = (props) => {
  return (
    <div className={props.flankA.change ? 'flank-yellow' : 'flank-green'} id={!props.flankA.title ? 'hidden' : null}>
      <h4>{props.flankA ? props.flankA.title : ''}</h4>
      <p>{props.flankA ? props.flankA.itemOne : ''}</p>
      <p>{props.flankA ? props.flankA.itemTwo : ''}</p>
      <p>{props.flankA ? props.flankA.itemThree : ''}</p>
      <p>{props.flankA ? props.flankA.itemFour : ''}</p>
      <p>{props.flankA ? props.flankA.itemFive : ''}</p>
      <div className="endcap-card-btns">
        <Link to={`/edit/${props.endcap._id}/flank/${props.flankA.id}`}>
        <h4 className={props.flankA.change ? 'flank-edit-completed' : 'flank-edit-change'}>Edit</h4>
        </Link>
        <div>
          <h4 
            className={props.flankA.change ? 'flank-completed' : 'flank-change'}
            onClick={() => props.handleToggleFlank(
              props.flankA ? props.flankA.change : '', 
              props.flankA ? props.flankA : '')
            }
          >
            {props.flankA.change ? 'Complete' : 'Change'}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default FlankA;