import React from 'react';

class NewEndcapPage extends React.Component {
  state = {
    title: '',
    itemOne: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/endcaps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => this.props.history.push('/'))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="endcap-wrapper">
        <h1>Create a New Endcap</h1>
        <form onSubmit={this.handleSubmit}  className="endcap-wrapper-form">
          <div className="endcap-wrapper-section">
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" 
              value={this.state.title} 
              placeholder="Enter Endcap Name" 
              onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" name="itemOne" 
              value={this.state.itemOne} 
              placeholder="Enter Item One" 
              onChange={this.handleChange} 
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemOne">Item Two</label><br />
            <input type="text" id="itemTwo" name="itemTwo"
              // value={this.state.itemTwo} 
              placeholder="Enter Item Two" 
              // onChange={this.handleChange} 
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemOne">Item Three</label><br />
            <input type="text" id="itemThree" name="itemThree" 
              // value={this.state.itemThree} 
              placeholder="Enter Item Three" 
              // onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemOne">Item Four</label><br />
            <input type="text" id="itemFour" name="itemFour" 
              // value={this.state.itemFour} 
              placeholder="Enter Item Four" 
              // onChange={this.handleChange}
            />
          </div>
          <div className="endcap-wrapper-section">
            <label htmlFor="itemOne">Item Five</label><br />
            <input type="text" id="itemFive" name="itemFive"
              // value={this.state.itemFive} 
              placeholder="Enter Item Five" 
              // onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="endcap-wrapper-btn">Add Endcap</button>
        </form>
      </div>
    )
  }
}

export default NewEndcapPage;