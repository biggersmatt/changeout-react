import React from 'react';

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
      .catch((err) => console.log(err));
  }

  handleDeleteEndcap = (endcapId) => {
    fetch(`http://localhost:4000/api/endcaps/${endcapId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((jsonData) => {
        const stateCopy = {...this.state};
        const updatedState = stateCopy.endcaps.filter((endcap) => {
          return endcap._id !== endcapId;
        });
        this.setState({
          endcaps: updatedState
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="endcap-wrapper">
        <h1>Edit {this.state.title}</h1>
        <form onSubmit={this.handleSubmit} className="endcap-wrapper-form">
          <button className="" onClick={() => this.handleDeleteEndcap(this.state._id)}>Delete</button>
          <div className="endcap-wrapper-section">
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" 
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" 
              value={this.state.itemOne} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemTwo">Item Two</label><br />
            <input type="text" id="itemTwo" 
              value={this.state.itemTwo} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemThree">Item Three</label><br />
            <input type="text" id="itemThree" 
              value={this.state.itemThree} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemFour">Item Four</label><br />
            <input type="text" id="itemFour" 
              value={this.state.itemFour} 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemFive">Item Five</label><br />
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

export default EditEndcapPage;