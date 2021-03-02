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

  render() {
    return (
      <div>
        <h1>Add New Endcap</h1>

        <form>
          <div>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="itemOne">Item One</label><br />
            <input type="text" id="itemOne" name="itemOne" value={this.state.itemOne} onChange={this.handleChange} />
          </div>
        </form>

      </div>
    )
  }
}

export default NewEndcapPage;