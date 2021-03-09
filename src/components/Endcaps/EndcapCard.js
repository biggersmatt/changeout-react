import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
require('./Endcap.css')

class EndcapCard extends React.Component {
  // state = {

  // }

  // componentDidMount() {
  //   fetch('http://localhost:4000/api/flanks')
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       const allFlanks = jsonData.allFlanks;
  //       let flankA = '';
  //       let flankB = '';
  //       allFlanks.forEach((flank) => {
  //         if(flank._id === this.props.endcap.flanks[0]) {
  //           flankA = flank;
  //         }
  //         if(flank._id === this.props.endcap.flanks[1]) {
  //           flankB = flank;
  //         }
  //       })
  //       this.setState({
  //         flankA: flankA,
  //         flankB: flankB,
  //       })
  //     })
  // }

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
    return (
      <Draggable draggableId={this.props.endcap._id} index={this.props.index}>
        {(provided, snapshot) => (
          <div className="endcap-flank-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {/* Flank A */}
            <div className="flank">
              <h4>{this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].title : ''}</h4>
              <p>{this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemOne : ''}</p>
              <p>{this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemTwo : ''}</p>
              <p>{this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemThree : ''}</p>
              <p>{this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemFour : ''}</p>
              <p>{this.props.endcap.flanks[0] ? this.props.endcap.flanks[0].itemFive : ''}</p>
              <div>
                {/* <Link to={`/edit/${this.props.endcap._id}/flank/${this.state.flankA._id}`}>
                  <button>Edit</button>
                </Link> */}
                <div>
                  <h4>Change</h4>
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
            {/* Endcap */}
            <div className="endcap-card" 
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
            <div className="flank">
            <h4>{this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].title : ''}</h4>
              <p>{this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemOne : ''}</p>
              <p>{this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemTwo : ''}</p>
              <p>{this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemThree : ''}</p>
              <p>{this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemFour : ''}</p>
              <p>{this.props.endcap.flanks[1] ? this.props.endcap.flanks[1].itemFive : ''}</p>
              <div>
                {/* <Link to={`/edit/${this.props.endcap._id}/flank/${this.state.flankB._id}`}>
                  <button>Edit</button>
                </Link> */}
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