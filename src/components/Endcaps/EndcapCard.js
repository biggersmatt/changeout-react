import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
require('./Endcap.css')

class EndcapCard extends React.Component {
  state = {
    title: this.props.endcap.title,
    itemOne: this.props.endcap.itemOne,
    itemTwo: this.props.endcap.itemTwo,
    itemThree: this.props.endcap.itemThree,
    itemFour: this.props.endcap.itemFour,
    itemFive: this.props.endcap.itemFive,
    change: this.props.endcap.change,
  }

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
    // console.log(this.state.change)
    return (
      <Draggable draggableId={this.props.endcap._id} index={this.props.index}>
        {(provided, snapshot) => (
          <div 
            className="endcap-card" 
            id={this.state.change ? 'yellow': null}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
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
        )}
      </Draggable>
    )
  }
}

export default EndcapCard;