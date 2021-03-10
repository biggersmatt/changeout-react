import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
require('./Endcap.css')

class EndcapCard extends React.Component {
  
  handleToggleClass = (event) => {
    event.preventDefault();
    const updatedState = {
      ...this.state,
      change: !this.state.change,
    }
    fetch(`http://localhost:4000/api/endcaps/${this.props.endcap._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedState),
    })
    .then(() => this.setState(updatedState))
    .catch((err) => console.log(err));
  }
  render() {
    const flankA = {
      id: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0]._id: '',
      title: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].title : '',
      itemOne: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemOne : '',
      itemTwo: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemTwo: '',
      itemThree: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemThree : '',
      itemFour: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemFour : '',
      itemFive: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemFive : '',
    }

    const flankB = {
      id: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1]._id: '',
      title: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].title : '',
      itemOne: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemOne : '',
      itemTwo: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemTwo: '',
      itemThree: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemThree : '',
      itemFour: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemFour : '',
      itemFive: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemFive : '',
    }
    return (
      <Draggable draggableId={this.props.endcap._id} index={this.props.index}>
        {(provided, snapshot) => (

          <div className="endcap-flank-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {/* Flank A */}
            <div className="flank" id={!this.props.endcap.flanks[0] ? 'hidden' : null}>
              <h4>{flankA.title}</h4>
              <p>{flankA.itemOne}</p>
              <p>{flankA.itemTwo}</p>
              <p>{flankA.itemThree}</p>
              <p>{flankA.itemFour}</p>
              <p>{flankA.itemFive}</p>
              <div>
                <Link to={`/edit/${this.props.endcap._id}/flank/${flankA.id}`}>
                  <button>Edit</button>
                </Link>
                <div>
                  <h4>Change</h4>
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
            {/* Endcap */}
            <div 
              className="endcap-card" 
              id={
                (this.props.endcap.flanks[0] && this.props.endcap.flanks[1] ? 'nothing' : null) ||
                (this.props.endcap.flanks[0] ? 'endcap-flank-a': '') || 
                (this.props.endcap.flanks[1] ? 'endcap-flank-b' : '') 
              }
            // id={this.props.endcap.change && 'yellow'}
            >
              <h3>{this.props.endcap.title}</h3>
              <p>{this.props.endcap.itemOne}</p>
              <p>{this.props.endcap.itemTwo}</p>
              <p>{this.props.endcap.itemThree}</p>
              <p>{this.props.endcap.itemFour}</p>
              <p>{this.props.endcap.itemFive}</p>
              <p>{this.props.endcap.change}</p>
              <div>
                <Link to={`/edit/${this.props.endcap._id}`}>
                  <button className="endcap-edit-btn">Edit</button>
                </Link>
                <div>
                  <h4 className="endcap-change">Change</h4>
                  <input type="checkbox" id="endcap-checkbox" onClick={this.handleToggleClass}/>
                </div>
              </div>
            </div>
            {/* Flank B */}
            <div className="flank" id={!this.props.endcap.flanks[1] ? 'hidden' : null}>
            <h4>{flankB.title}</h4>
              <p>{flankB.itemOne}</p>
              <p>{flankB.itemTwo}</p>
              <p>{flankB.itemThree}</p>
              <p>{flankB.itemFour}</p>
              <p>{flankB.itemFive}</p>
              <div>
                <Link to={`/edit/${this.props.endcap._id}/flank/${flankB.id}`}>
                  <button>Edit</button>
                </Link>
                <div>
                  <h4>Change</h4>
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}

export default EndcapCard;