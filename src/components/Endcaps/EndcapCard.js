import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import FlankA from '../FlankA/FlankA';
require('./EndcapCard.css')

class EndcapCard extends React.Component {
  render() {
    const flankB = {
      id: this.props.endcap.flankB ? this.props.endcap.flankB._id: '',
      title: this.props.endcap.flankB ? this.props.endcap.flankB.title : '',
      itemOne: this.props.endcap.flankB ? this.props.endcap.flankB.itemOne : '',
      itemTwo: this.props.endcap.flankB ? this.props.endcap.flankB.itemTwo: '',
      itemThree: this.props.endcap.flankB ? this.props.endcap.flankB.itemThree : '',
      itemFour: this.props.endcap.flankB ? this.props.endcap.flankB.itemFour : '',
      itemFive: this.props.endcap.flankB ? this.props.endcap.flankB.itemFive : '',
      change: this.props.endcap.flankB ? this.props.endcap.flankB.change : '',
      side: this.props.endcap.flankB ? this.props.endcap.flankB.side : '',
    }

    return (
      <Draggable draggableId={this.props.endcap._id} index={this.props.index}>
        {(provided, snapshot) => (
          <div className="endcap-flank-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <FlankA 
              endcap={this.props.endcap} 
              flankA={this.props.flankA} 
              handleToggleFlank={this.props.handleToggleFlank}
            />
            {/* Endcap */}
            <div 
              className={`endcap-card ${this.props.endcap.change && 'yellow'}`} 
              id={
                (this.props.endcap.flankA.title && flankB.title ? 'nothing' : null) ||
                (this.props.endcap.flankA.title ? 'endcap-flank-a': '') || 
                (flankB.title ? 'endcap-flank-b' : '') 
              }
            >
              <h3>{this.props.endcap.title}</h3>
              <p>{this.props.endcap.itemOne}</p>
              <p>{this.props.endcap.itemTwo}</p>
              <p>{this.props.endcap.itemThree}</p>
              <p>{this.props.endcap.itemFour}</p>
              <p>{this.props.endcap.itemFive}</p>
              <p>{this.props.endcap.change}</p>
              <div className="endcap-card-btns">
                <Link to={`/edit/${this.props.endcap._id}`}>
                <h4 className={this.props.endcap.change ? 'endcap-edit-completed' : 'endcap-edit-change'}>Edit</h4>
                </Link>
                <div>
                  <h4 
                    className={this.props.endcap.change ? 'endcap-completed' : 'endcap-change'}
                    onClick={() => this.props.handleToggleEndcap(this.props.endcap.change, this.props.endcap._id)}
                  >
                    {this.props.endcap.change ? 'Complete' : 'Change'}
                  </h4>
                </div>
              </div>
            </div>
            {/* Flank B */}
            <div className={flankB.change ? 'flank-yellow' : 'flank-green'} id={!flankB.title ? 'hidden' : null}>
            <h4>{flankB.title}</h4>
              <p>{flankB.itemOne}</p>
              <p>{flankB.itemTwo}</p>
              <p>{flankB.itemThree}</p>
              <p>{flankB.itemFour}</p>
              <p>{flankB.itemFive}</p>
              <div className="endcap-card-btns">
                <Link to={`/edit/${this.props.endcap._id}/flank/${flankB.id}`}>
                  <h4 className={flankB.change ? 'flank-edit-completed' : 'flank-edit-change'}>Edit</h4>
                </Link>
                <div>
                  <h4 
                    className={flankB.change ? 'flank-completed' : 'flank-change'}
                    onClick={() => this.props.handleToggleFlank(flankB.change, this.props.endcap.flankB)}
                  >
                    {flankB.change ? 'Complete' : 'Change'}
                  </h4>
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