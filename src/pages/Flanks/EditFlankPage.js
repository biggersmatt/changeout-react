import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    })
      .then(() => {
        this.props.handleHasUpdated(true)
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="endcap-wrapper">
        <h1>Edit Flank</h1>
        <div className="endcap-edit-wrapper">
          <div>
            <Link to="/">
              <button 
                className="endcap-btn" 
                onClick={() => this.handleDeleteEndcap(this.props.match.params.id)}
                >
                -
              </button>
            </Link>
            <h3 className="endcap-edit-btn-titles">Delete</h3>
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

export default withRouter(EditFlankPage);