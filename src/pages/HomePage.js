import React from 'react';
import EndcapsList from '../components/Endcaps/EndcapsList';

class HomePage extends React.Component {
  state = {
    endcaps: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/endcaps')
      .then((response) => response.json())
      .then((jsonData) => {
        const endcaps = jsonData.allEndcaps;
        this.setState({
          endcaps: endcaps
        })
      })
      .catch()
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
      <div>
        <h1>Change Out Homepage</h1>
        <EndcapsList endcaps={this.state.endcaps} deleteEndcap={this.handleDeleteEndcap}/>
      </div>
    )
  }
}

export default HomePage;