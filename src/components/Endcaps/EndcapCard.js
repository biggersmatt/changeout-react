import React from 'react';
import { Link } from 'react-router-dom';
require('./Endcap.css')

class EndcapCard extends React.Component {
  state = {
    active: false,
  }

  handleToggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className="endcap-card" id={this.state.active ? 'green': null}>
        <h3>{this.props.endcap.title}</h3>
        <p>{this.props.endcap.itemOne}</p>
        <p>{this.props.endcap.itemTwo}</p>
        <p>{this.props.endcap.itemThree}</p>
        <p>{this.props.endcap.itemFour}</p>
        <p>{this.props.endcap.itemFive}</p>
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
    )
  }
}

export default EndcapCard;