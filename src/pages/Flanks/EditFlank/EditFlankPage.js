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
    fetch(`https://calm-forest-99785.herokuapp.com/flanks/${this.props.match.params.id}`)
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
    fetch(`https://calm-forest-99785.herokuapp.com/flanks/${this.props.match.params.id}`, {
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

  handleDeleteFlank = (flankId) => {
    fetch(`https://calm-forest-99785.herokuapp.com/flanks/${flankId}`, {
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
        <h1 className="edit-flank-title">Edit {this.state.title}</h1>
        <div className="edit-flank-header">
          <div className="edit-flank-btn-wrapper">
            <Link to="/">
              <i 
                className="far fa-trash-alt edit-flank-delete-btn"
                onClick={() => this.handleDeleteFlank(this.props.match.params.id)}
              >
              </i>
            </Link>
            <h4>Delete</h4>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="edit-flank-form">
          <div className="edit-flank-form-section">
            <label className="edit-flank-form-label" htmlFor="title">Title of Flank</label>
            <input 
              type="text" 
              id="title" 
              className="edit-flank-form-input"
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label className="edit-flank-form-label" htmlFor="itemOne">One</label>
            <input 
              type="text"  
              id="itemOne" 
              className="edit-flank-form-input"
              value={this.state.itemOne} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label className="edit-flank-form-label" htmlFor="itemOne">Two</label>
            <input 
              type="text" 
              id="itemTwo" 
              className="edit-flank-form-input"
              value={this.state.itemTwo} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label className="edit-flank-form-label" htmlFor="itemOne">Three</label>
            <input 
              type="text" 
              id="itemThree" 
              className="edit-flank-form-input"
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label className="edit-flank-form-label" htmlFor="itemOne">Four</label>
            <input 
              type="text" 
              id="itemFour" 
              className="edit-flank-form-input"
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-flank-form-section">
            <label className="edit-flank-form-label" htmlFor="itemOne">Five</label>
            <input 
              type="text" 
              id="itemFive" 
              className="edit-flank-form-input"
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