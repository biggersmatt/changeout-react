import React from 'react';
import { withRouter } from 'react-router-dom';
require('./NewFlankPage.css');

class NewFlankPage extends React.Component {
  state = {
    currentEndcapTitle: '',
    selectedEndcap: '',
    title: '',
    itemOne: '',
    itemTwo: '',
    itemThree: '',
    itemFour: '',
    itemFive: '',
    change: false,
    side: '',
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/endcaps', {
      credentials: 'include',
    })
    .then((response) => response.json())
    .then((jsonData => {
      const endcapData = jsonData.allEndcaps;
      let currentEndcapTitle = '';
      endcapData.map(endcap => {
        if(endcap._id === this.props.match.params.id)
        currentEndcapTitle = endcap.title;
        return currentEndcapTitle;
      })
      this.setState({
        currentEndcapTitle: currentEndcapTitle,
        selectedEndcap: this.props.match.params.id,
      })
    }))
    .catch((err) => (console.log(err)))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/flanks', {
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
      <div className="new-flank-wrapper">
        <h1 className="new-flank-title">Add Flank to {this.state.currentEndcapTitle}</h1>
        <form onSubmit={this.handleSubmit}  className="new-flank-form">
          <div className="new-flank-form-section">
            <label className="new-flank-form-label" htmlFor="itemOne">Side A or B</label>
            <input 
              type="text" 
              id="side" 
              name="side"
              placeholder="Choose A Side"
              className="new-flank-form-input"
              value={this.state.side} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-flank-form-section">
            <label className="new-flank-form-label" htmlFor="title">Title of Flank</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              placeholder="Enter Title"
              className="new-flank-form-input"
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-flank-form-section">
            <label className="new-flank-form-label" htmlFor="itemOne">One</label>
            <input 
              type="text" 
              id="itemOne" 
              name="itemOne" 
              placeholder="Enter Item"
              className="new-flank-form-input"
              value={this.state.itemOne} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="new-flank-form-section">
            <label className="new-flank-form-label" htmlFor="itemOne">Two</label>
            <input 
              type="text" 
              id="itemTwo" 
              name="itemTwo"
              placeholder="Enter Item"
              className="new-flank-form-input"
              value={this.state.itemTwo} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="new-flank-form-section">
            <label className="new-flank-form-label" htmlFor="itemOne">Three</label>
            <input 
              type="text" 
              id="itemThree" 
              name="itemThree" 
              placeholder="Enter Item"
              className="new-flank-form-input"
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-flank-form-section">
            <label className="new-flank-form-label" htmlFor="itemOne">Four</label>
            <input 
              type="text" 
              id="itemFour" 
              name="itemFour" 
              placeholder="Enter Item"
              className="new-flank-form-input"
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-flank-form-section">
            <label className="new-flank-form-label" htmlFor="itemOne">Five</label>
            <input 
              type="text" 
              id="itemFive" 
              name="itemFive"
              placeholder="Enter Item"
              className="new-flank-form-input"
              value={this.state.itemFive} 
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="new-flank-btn">Add Flank</button>
        </form>
      </div>
    )
  }
}

export default withRouter(NewFlankPage);