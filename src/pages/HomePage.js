import React from 'react';
import EndcapsList from '../components/Endcaps/EndcapsList';

class HomePage extends React.Component {
  state = {
    endcaps: []
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