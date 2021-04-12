import React from 'react';
import { Link, withRouter } from 'react-router-dom';
require('./EditEndcap.css');

class EditEndcapPage extends React.Component {
  state = {
    title: '',
    itemOne: '',
    itemTwo: '',
    itemThree: '',
    itemFour: '',
    itemFive: '',
    flankA: '',
    flankB: '',
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/endcaps/${this.props.match.params.id}`,{
      credentials: 'include',
    })
    .then((response) => response.json())
    .then((jsonData) => {
      const endcap = jsonData.foundEndcap;
      this.setState(endcap);
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
    fetch(`http://localhost:4000/api/endcaps/${this.props.match.params.id}`, {
      credentials: 'include',
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

  handleDeleteEndcap = (endcapId) => {
    fetch(`http://localhost:4000/api/endcaps/${endcapId}`, {
      credentials: 'include',
      method: 'DELETE',
    })
    fetch('http://localhost:4000/api/settings')
    .then((response) => response.json())
    .then((jsonData) => {
      const userSetting = jsonData.settings.find((setting) => {
        return setting.user === this.props.user._id;
      })
      const updatedColumnOrder = userSetting.columnOrder.endcapIds.filter((remainingId) => remainingId !== endcapId);
      const settings = {
        columnOrder: {
          id: 'column-1',
          title: 'To Do',
          endcapIds: updatedColumnOrder,
        },
      }
      fetch(`http://localhost:4000/api/settings/${userSetting._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      })
      .then(() => this.handleDeleteFlank(this.state.flankA))
      .then(() => this.handleDeleteFlank(this.state.flankB))
      .then(() => this.props.handleHasUpdated(true))
      .catch((err) => console.log(err));
    })
  }

  handleDeleteFlank = (flankId) => {
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
      <div className="edit-endcap-wrapper">
        <h1 className="edit-endcap-title">Edit {this.state.title}</h1>
        <div id={`${(this.props.endcaps.length === 1 && (this.state.flankA && this.state.flankB)) ? 'hidden' : null}`} className="edit-endcap-header-btns">
          <div className="edit-endcap-btn-wrapper" id={this.props.endcaps.length === 1 ? 'hidden' : null}>
            <Link to="/">
              <i 
                className="far fa-trash-alt edit-endcap-delete-btn" 
                onClick={() => this.handleDeleteEndcap(this.state._id)}
              >
              </i>
            </Link>
            <h4 className="edit-endcap-btn-title">Delete</h4>
          </div>
          <div id={`${(this.state.flankA && this.state.flankB) ? 'hidden' : null}`} className="edit-endcap-btn-wrapper">
            <Link to={`/edit/${this.props.match.params.id}/flank/new`}>
              <i 
                className="far fa-plus-square edit-endcap-flank-btn"
              >
              </i>
            </Link>
            <h4 className="edit-endcap-btn-title">Flank</h4>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="edit-endcap-form">
          <div className="edit-endcap-form-section">
            <label className="edit-endcap-form-label" htmlFor="title">Title of Endcap</label>
            <input 
              type="text" 
              id="title" 
              className="edit-endcap-form-input"
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label className="edit-endcap-form-label" htmlFor="itemOne">One</label>
            <input 
              type="text" 
              id="itemOne" 
              className="edit-endcap-form-input"
              value={this.state.itemOne} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label className="edit-endcap-form-label" htmlFor="itemOne">Two</label>
            <input 
              type="text" 
              id="itemTwo" 
              className="edit-endcap-form-input"
              value={this.state.itemTwo} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label className="edit-endcap-form-label" htmlFor="itemOne">Three</label>
            <input 
              type="text" 
              id="itemThree" 
              className="edit-endcap-form-input"
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label className="edit-endcap-form-label" htmlFor="itemOne">Four</label>
            <input 
              type="text" 
              id="itemFour" 
              className="edit-endcap-form-input"
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label className="edit-endcap-form-label" htmlFor="itemOne">Five</label>
            <input 
              type="text" 
              id="itemFive" 
              className="edit-endcap-form-input"
              value={this.state.itemFive} 
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="edit-endcap-btn">Update Endcap</button>
        </form>
      </div>

    )
  }
}

export default withRouter(EditEndcapPage);