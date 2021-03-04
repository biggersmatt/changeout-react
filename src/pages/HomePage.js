import React from 'react';
import { Link } from 'react-router-dom';
import Month from '../components/Promo/Month';
import Period from '../components/Promo/Period';
import EndcapsList from '../components/Endcaps/EndcapsList';

class HomePage extends React.Component {
  state = {
    endcaps: [],
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
        <header>
          <div className="endcap-btn-wrapper">
            <Link to="/new">
              <button className="endcap-btn">+</button>
            </Link>
            <h3>New Endcap</h3>
          </div>
          <h1 className="homepage-title">Change Out</h1>
          <div className="homepage-promo">
            <ul>
              <li className="homepage-promo-title">Promo</li>
              <Month month={this.props.month} handleChangeMonth={this.props.handleChangeMonth}/>
              <Period period={this.props.period} handleChangePeriod={this.props.handleChangePeriod} />
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