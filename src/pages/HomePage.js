import React from 'react';
import { Link } from 'react-router-dom';
import Month from '../components/Promo/Month';
import EndcapsList from '../components/Endcaps/EndcapsList';

 const HomePage = (props) => {
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
              <Month month={props.month} handleChange={props.handleChange}/>
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
          <EndcapsList endcaps={props.endcaps} />
        </main>
      </div>
    )
  }


export default HomePage;