import React from 'react';
import { withRouter } from 'react-router-dom';
require ('./NewEndcap.css');

class NewEndcapPage extends React.Component {
  state = {
    title: '',
    itemOne: '',
    itemTwo: '',
    itemThree: '',
    itemFour: '',
    itemFive: '',
    change: false,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    fetch('http://localhost:4000/api/endcaps', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => this.props.history.push('/'))
      .then(() => this.props.handleHasUpdated(true))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="new-endcap-wrapper">
        <h1 className="new-endcap-title">Create a New Endcap</h1>
        <form onSubmit={this.handleSubmit}  className="new-endcap-form">
          <div className="new-endcap-form-section">
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" 
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-endcap-form-section">
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" name="itemOne" 
              value={this.state.itemOne} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="new-endcap-form-section">
            <label htmlFor="itemOne">Item Two</label><br />
            <input type="text" id="itemTwo" name="itemTwo"
              value={this.state.itemTwo} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="new-endcap-form-section">
            <label htmlFor="itemOne">Item Three</label><br />
            <input type="text" id="itemThree" name="itemThree" 
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-endcap-form-section">
            <label htmlFor="itemOne">Item Four</label><br />
            <input type="text" id="itemFour" name="itemFour" 
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-endcap-form-section">
            <label htmlFor="itemOne">Item Five</label><br />
            <input type="text" id="itemFive" name="itemFive"
              value={this.state.itemFive} 
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="new-endcap-btn">Add Endcap</button>
        </form>
      </div>
    )
  }
}

export default withRouter(NewEndcapPage);