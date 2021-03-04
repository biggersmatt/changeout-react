import React from 'react';
import { Link } from 'react-router-dom';
import EndcapsList from '../components/Endcaps/EndcapsList';

class HomePage extends React.Component {
  state = {
    endcaps: [],
    month: '',
    period: '',
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

  handleChange = (event) => {
    const updatedMonth = event.target[event.target.value].innerHTML;
    this.setState({ month: updatedMonth});
  }

  render() {
    return (
      <div>
        <header>
          <div className="homepage-new-endcap">
            <Link to="/new">
              <button className="homepage-new-btn">+</button>
            </Link>
            <h3>New Endcap</h3>
          </div>
          <h1 className="homepage-title">Change Out</h1>
          <div className="homepage-promo">
            <ul>
              <li className="homepage-promo-title">Promo</li>
              <li className="homepage-promo-selection">
                <select onChange={this.handleChange}>
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6">July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
              </li>
              <li className="homepage-promo-selection">
                <select>
                  <option value="1">A</option>
                  <option value="2">B</option>
                </select>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <EndcapsList endcaps={this.state.endcaps} />
        </main>
      </div>
    )
  }
}

export default HomePage;