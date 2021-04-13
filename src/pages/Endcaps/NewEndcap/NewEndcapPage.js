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
    fetch('http://gentle-savannah-74717.herokuapp.com/endcaps', {
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
        <h1 className="new-endcap-title">New Endcap</h1>
        <form onSubmit={this.handleSubmit}  className="new-endcap-form shadow">
          <div className="new-endcap-form-section">
            <label className="new-endcap-form-label" htmlFor="title">Title of Endcap</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              placeholder="Enter Title"
              value={this.state.title} 
              onChange={this.handleChange}
              className="new-endcap-form-input"
            />
          </div>
          <div className="new-endcap-form-section">
            <label className="new-endcap-form-label" htmlFor="itemOne">One</label>
            <input 
              type="text" 
              id="itemOne" 
              name="itemOne" 
              placeholder="Enter Item"
              value={this.state.itemOne} 
              onChange={this.handleChange}
              className="new-endcap-form-input" 
            />
          </div>
          <div className="new-endcap-form-section">
            <label className="new-endcap-form-label" htmlFor="itemOne">Two</label>
            <input 
              type="text" 
              id="itemTwo" 
              name="itemTwo"
              placeholder="Enter Item"
              value={this.state.itemTwo} 
              onChange={this.handleChange}
              className="new-endcap-form-input" 
            />
          </div>
          <div className="new-endcap-form-section">
            <label className="new-endcap-form-label" htmlFor="itemOne">Three</label>
            <input 
              type="text" 
              id="itemThree" 
              name="itemThree" 
              placeholder="Enter Item"
              value={this.state.itemThree} 
              onChange={this.handleChange}
              className="new-endcap-form-input"
            />
          </div>
          <div className="new-endcap-form-section">
            <label className="new-endcap-form-label" htmlFor="itemOne">Four</label>
            <input 
              type="text" 
              id="itemFour" 
              name="itemFour" 
              placeholder="Enter Item"
              value={this.state.itemFour} 
              onChange={this.handleChange}
              className="new-endcap-form-input"
            />
          </div>
          <div className="new-endcap-form-section">
            <label className="new-endcap-form-label" htmlFor="itemOne">Five</label>
            <input 
              type="text" 
              id="itemFive" 
              name="itemFive"
              placeholder="Enter Item"
              value={this.state.itemFive} 
              onChange={this.handleChange}
              className="new-endcap-form-input"
            />
          </div>
          <button type="submit" className="new-endcap-btn shadow">Add Endcap</button>
        </form>
      </div>
    )
  }
}

export default withRouter(NewEndcapPage);