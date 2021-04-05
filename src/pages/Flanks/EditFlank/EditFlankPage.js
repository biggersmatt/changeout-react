import React from 'react';
import { Link, withRouter } from 'react-router-dom';
require('./EditFlankPage.css');

class EditFlankPage extends React.Component {
  state = {
    title: '',
    itemOne: '',
    itemTwo: '',
    itemThree: '',
    itemFour: '',
    itemFive: '',
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/flanks/${this.props.match.params.id}`)
    .then((response) => response.json())
    .then((jsonData) => {
      const flank = jsonData.foundFlank;
      this.setState({
        title: flank.title,
        itemOne: flank.itemOne,
        itemTwo: flank.itemTwo,
        itemThree: flank.itemThree,
        itemFour: flank.itemFour,
        itemFive: flank.itemFive,
      })
    })
    .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/api/flanks/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(() => this.props.history.push('/'))
    .then(() => this.props.handleHasUpdated(true))
    .catch((err) => console.log(err));
  }

  handleDeleteEndcap = (flankId) => {
    fetch(`http://localhost:4000/api/flanks/${flankId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props)
    })
    .then(() => this.props.handleHasUpdated(true))
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="edit-flank-wrapper">
        <h1 className="edit-flank-title">Edit Flank {this.state.title}</h1>
        <div className="edit-flank-header">
          <div className="edit-flank-btn-wrapper">
            <Link to="/">
              <button 
                className="edit-flank-btn" 
                onClick={() => this.handleDeleteEndcap(this.props.match.params.id)}
                >
                -
              </button>
            </Link>
            <h4>Delete</h4>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="edit-flank-form">
          <div className="edit-flank-form-section">
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" 
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" 
              value={this.state.itemOne} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label htmlFor="itemOne">Item Two</label><br />
            <input type="text" id="itemTwo" 
              value={this.state.itemTwo} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label htmlFor="itemOne">Item Three</label><br />
            <input type="text" id="itemThree" 
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label htmlFor="itemOne">Item Four</label><br />
            <input type="text" id="itemFour" 
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label htmlFor="itemOne">Item Five</label><br />
            <input type="text" id="itemFive" 
              value={this.state.itemFive} 
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="edit-flank-submit">Update Flank</button>
        </form>
      </div>
    )
  }
}

export default withRouter(EditFlankPage);