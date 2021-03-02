import React from 'react';

class HomePage extends React.Component {
  state = {
    endcaps: []
  }

  // getEndcaps = () => {
  //   return this.state.endcaps.map((endcap) => {
  //     return <div>{endcap.title}</div>
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Change Out Homepage</h1>
        {this.getEndcaps()}
      </div>
    )
  }
}

export default HomePage;