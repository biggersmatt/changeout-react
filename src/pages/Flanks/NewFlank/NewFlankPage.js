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
    fetch('http://localhost:4000/api/endcaps')
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
        <h1 className="new-flank-title">Add a Flank to {this.state.currentEndcapTitle}</h1>
        <form onSubmit={this.handleSubmit}  className="new-flank-form">
          <div className="new-flank-form-section">
            <label htmlFor="itemOne">Side A or B?</label><br />
            <input type="text" id="side" name="side"
              value={this.state.side} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-flank-form-section">
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" 
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-flank-form-section">
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" name="itemOne" 
              value={this.state.itemOne} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="new-flank-form-section">
            <label htmlFor="itemOne">Item Two</label><br />
            <input type="text" id="itemTwo" name="itemTwo"
              value={this.state.itemTwo} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="new-flank-form-section">
            <label htmlFor="itemOne">Item Three</label><br />
            <input type="text" id="itemThree" name="itemThree" 
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-flank-form-section">
            <label htmlFor="itemOne">Item Four</label><br />
            <input type="text" id="itemFour" name="itemFour" 
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="new-flank-form-section">
            <label htmlFor="itemOne">Item Five</label><br />
            <input type="text" id="itemFive" name="itemFive"
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