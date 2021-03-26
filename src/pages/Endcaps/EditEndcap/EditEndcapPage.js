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
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/endcaps/${this.props.match.params.id}`)
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
      method: 'DELETE',
    })
    fetch('http://localhost:4000/api/settings')
    .then((response) => response.json())
    .then((jsonData) => {
      const currentColumnOrder = jsonData.settings[0].columnOrder.endcapIds;
      const updatedColumnOrder = currentColumnOrder.filter((remainingId) => remainingId !== endcapId);
      const settings = {
        columnOrder: {
          id: 'column-1',
          title: 'To Do',
          endcapIds: updatedColumnOrder,
        },
        promoMonth: 'March',
        promoPeriod: 'B',
      }
      jsonData.settings.forEach((setting) => {
        fetch(`http://localhost:4000/api/settings/${setting._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(settings),
        })
        .catch((err) => console.log(err));
      })
    })
    .then(() => this.props.handleHasUpdated(true))
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="edit-endcap-wrapper">
        <h1 className="edit-endcap-title">Edit {this.state.title}</h1>
        <div className="edit-endcap-header-btns">
          <div id={this.props.endcaps.length === 1 ? 'hidden' : null}>
            <Link to="/">
              <button 
                className="endcap-btn" 
                onClick={() => this.handleDeleteEndcap(this.state._id)}
                >
                -
              </button>
            </Link>
            <h3>Delete</h3>
          </div>
          <div>
            <Link to={`/edit/${this.props.match.params.id}/flank/new`}>
              <button 
                className="endcap-btn" 
                >
                +
              </button>
            </Link>
            <h3>Flank</h3>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="edit-endcap-form">
          <div className="edit-endcap-form-section">
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" 
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" 
              value={this.state.itemOne} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label htmlFor="itemOne">Item Two</label><br />
            <input type="text" id="itemTwo" 
              value={this.state.itemTwo} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label htmlFor="itemOne">Item Three</label><br />
            <input type="text" id="itemThree" 
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label htmlFor="itemOne">Item Four</label><br />
            <input type="text" id="itemFour" 
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-endcap-form-section">
            <label htmlFor="itemOne">Item Five</label><br />
            <input type="text" id="itemFive" 
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