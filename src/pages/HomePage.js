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

  render() {
    return (
      <div>
        <h1>Change Out Homepage</h1>
        <EndcapsList endcaps={this.state.endcaps}/>
      </div>
    )
  }
}

export default HomePage;