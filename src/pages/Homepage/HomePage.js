import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import EndcapsList from "../../components/Endcaps/EndcapsList";
require("./Homepage.css");

function HomePage(props) {
  const [endcaps, setEndcaps] = useState([]);

  const userId = props.userId;

  const handleFetchEndcaps = () => {
    fetch("https://gentle-savannah-74717.herokuapp.com/endcaps")
    .then((response) => response.json())
    .then((jsonData) => {
      const allEndcaps = jsonData.allEndcaps;
      setEndcaps(allEndcaps);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleFetchEndcaps();
  }, [])

  let userEndcaps = [];

  return (
    <div>
      <Header />
      <main>
        {
        endcaps.forEach((endcap) => {
          if(endcap.user === userId) {
            userEndcaps.push(endcap);
          }
        })}
        <EndcapsList 
                    handleToggleEndcap={props.handleToggleEndcap}
                    handleToggleFlank={props.handleToggleFlank}
                    endcaps={userEndcaps}
                    key={userId}  
                  />
        </main>
    </div>
  )
}

export default HomePage;