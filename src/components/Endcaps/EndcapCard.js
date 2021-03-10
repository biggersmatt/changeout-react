import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
require('./Endcap.css')

class EndcapCard extends React.Component {
  render() {
    const flankA = {
      id: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0]._id: '',
      title: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].title : '',
      itemOne: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemOne : '',
      itemTwo: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemTwo: '',
      itemThree: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemThree : '',
      itemFour: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemFour : '',
      itemFive: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemFive : '',
      change: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].change : '',
      side: this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].side : '',
    }

    const flankB = {
      id: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1]._id: '',
      title: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].title : '',
      itemOne: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemOne : '',
      itemTwo: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemTwo: '',
      itemThree: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemThree : '',
      itemFour: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemFour : '',
      itemFive: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemFive : '',
      change: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].change : '',
      side: this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].side : '',
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
            <div className={flankA.change ? 'flank-yellow' : 'flank-green'} id={!flankA.title ? 'hidden' : null}>
              <h4>{flankA.title}</h4>
              <p>{flankA.itemOne}</p>
              <p>{flankA.itemTwo}</p>
              <p>{flankA.itemThree}</p>
              <p>{flankA.itemFour}</p>
              <p>{flankA.itemFive}</p>
              <div className="endcap-card-btns">
                <Link to={`/edit/${this.props.endcap._id}/flank/${flankA.id}`}>
                <h4 className={flankA.change ? 'flank-edit-completed' : 'flank-edit-change'}>Edit</h4>
                </Link>
                <div>
                  <h4 
                    className={flankA.change ? 'flank-completed' : 'flank-change'}
                    onClick={() => this.props.handleToggleFlank(flankA.change, this.props.endcap.flanks[0])}
                  >
                    {flankA.change ? 'Completed' : 'Change'}
                  </h4>
                </div>
              </div>
            </div>
            {/* Endcap */}
            <div 
              className={`endcap-card ${this.props.endcap.change && 'yellow'}`} 
              id={
                (flankA.title && flankB.title ? 'nothing' : null) ||
                (flankA.title ? 'endcap-flank-a': '') || 
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
                    {this.props.endcap.change ? 'Completed' : 'Change'}
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
                    onClick={() => this.props.handleToggleFlank(flankB.change, this.props.endcap.flanks[1])}
                  >
                    {flankB.change ? 'Completed' : 'Change'}
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