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
      <div>
        <h1>Add New Endcap</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" value={this.state.title} placeholder="Enter Endcap Name" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" name="itemOne" value={this.state.itemOne} placeholder="Enter Item One" onChange={this.handleChange} />
          </div>
          <button type="submit">Add Endcap</button>
        </form>
      </div>
    )
  }
}

export default NewEndcapPage;