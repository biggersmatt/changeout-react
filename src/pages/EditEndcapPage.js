import React from 'react';

class EditEndcapPage extends React.Component {
  state = {
    title: '',
    itemOne: '',
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

  render() {
    return (
      <div>
        <h1>Edit {this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" value={this.state.itemOne} onChange={this.handleChange} />
          </div>
          <button type="submit">Update Endcap</button>
        </form>
      </div>

    )
  }
}

export default EditEndcapPage;