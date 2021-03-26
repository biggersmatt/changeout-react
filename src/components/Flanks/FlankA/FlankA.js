import { Link } from 'react-router-dom';
require('../Flanks.css');

const FlankA = (props) => {
  const flankA = {
    id: props.endcap.flankA ? props.endcap.flankA._id: '',
    title: props.endcap.flankA ? props.endcap.flankA.title : '',
    itemOne: props.endcap.flankA ? props.endcap.flankA.itemOne : '',
    itemTwo: props.endcap.flankA ? props.endcap.flankA.itemTwo: '',
    itemThree: props.endcap.flankA ? props.endcap.flankA.itemThree : '',
    itemFour: props.endcap.flankA ? props.endcap.flankA.itemFour : '',
    itemFive: props.endcap.flankA ? props.endcap.flankA.itemFive : '',
    change: props.endcap.flankA ? props.endcap.flankA.change : '',
    side: props.endcap.flankA ? props.endcap.flankA.side : '',
  }

  return (
    <div 
      className={flankA.change ? 'flank-yellow' : 'flank-green'} 
      id={!flankA.title ? 'hidden' : null}
    >
      <h4 className="flank-title">{flankA.title}</h4>
      <p className="flank-item">{flankA.itemOne}</p>
      <p className="flank-item">{flankA.itemTwo}</p>
      <p className="flank-item">{flankA.itemThree}</p>
      <p className="flank-item">{flankA.itemFour}</p>
      <p className="flank-item">{flankA.itemFive}</p>
      <div className="flank-btns">
        <Link to={`/edit/${props.endcap._id}/flank/${flankA.id}`}>
          <h4 className={flankA.change ? 'flank-edit-completed' : 'flank-edit-change'}>Edit Info</h4>
        </Link>
        <div>
          <h4 
            className={flankA.change ? 'flank-completed' : 'flank-change'}
            onClick={() => props.handleToggleFlank(
              flankA.change, 
              props.flankA)
            }
          >
            {flankA.change ? 'Complete' : 'Change'}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default FlankA;