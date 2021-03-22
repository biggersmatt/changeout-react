import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      <div className="endcap-wrapper">
        <h1>Edit Endcap</h1>
        <div className="endcap-edit-wrapper">
          <div id={this.props.endcaps.length === 1 ? 'hidden' : null}>
            <Link to="/">
              <button 
                className="endcap-btn" 
                onClick={() => this.handleDeleteEndcap(this.state._id)}
                >
                -
              </button>
            </Link>
            <h3 className="endcap-edit-btn-titles">Delete</h3>
          </div>
          <div>
            <Link to={`/edit/${this.props.match.params.id}/flank/new`}>
              <button 
                className="endcap-btn" 
                >
                +
              </button>
            </Link>
            <h3 className="endcap-edit-btn-titles">Flank</h3>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="endcap-wrapper-form">
          <p className="endcap-form-title">Title</p>
          <div className="endcap-wrapper-section">
            <input type="text" id="title" 
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <p className="endcap-form-title">Items</p>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemOne">One:</label>
            <input type="text" id="itemOne" 
              value={this.state.itemOne} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemTwo">Two:</label>
            <input type="text" id="itemTwo" 
              value={this.state.itemTwo} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemThree">Three:</label>
            <input type="text" id="itemThree" 
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemFour">Four:</label>
            <input type="text" id="itemFour" 
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemFive">Five:</label>
            <input type="text" id="itemFive" 
              value={this.state.itemFive} 
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="endcap-wrapper-btn">Update Endcap</button>
        </form>
      </div>

    )
  }
}

export default withRouter(EditEndcapPage);