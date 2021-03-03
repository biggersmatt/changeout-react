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
        <header>
          <div className="homepage-new-endcap">
            <button className="homepage-new-btn">+</button>
            <h3>New Endcap</h3>
          </div>
          <h1 className="homepage-title">Change Out</h1>
          <div className="homepage-promo">
            <ul>
              <li className="homepage-promo-title">Promo</li>
              <li className="homepage-promo-selection">
                <p>Month</p>
                <select>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </li>
              <li className="homepage-promo-selection">
                <p>Period</p>
                <select>
                  <option value="1">A</option>
                  <option value="2">B</option>
                </select>
              </li>
            </ul>
          </div>
        </header>
        <EndcapsList endcaps={this.state.endcaps} deleteEndcap={this.handleDeleteEndcap}/>
      </div>
    )
  }
}

export default HomePage;