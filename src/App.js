import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import HomePage from "./pages/Homepage/HomePage";
import NewEndcapPage from "./pages/Endcaps/NewEndcap/NewEndcapPage";
import EditEndcapPage from "./pages/Endcaps/EditEndcap/EditEndcapPage";
import NewFlankPage from "./pages/Flanks/NewFlank/NewFlankPage";
import EditFlankPage from "./pages/Flanks/EditFlank/EditFlankPage";
require ("./App.css");

function App() {
  const [user, setUser] = useState({
    username: "",
    userId: "",
  })


  const handleUserInfo = (currentUsername, userId) => {
    setUser({
      username: currentUsername,
      userId: userId,
    });
  }

  const handleSignOut = () => {
    setUser({
      username: "",
      userId: "",
    })
  }

  return (
    <div className="wrapper">
      <Navbar username={user.username} handleSignOut={handleSignOut} />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <LoginPage handleUserId={handleUserInfo} />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/home">
            <HomePage userId={user.userId} />
          </Route>
          <Route path="/new">
            <NewEndcapPage userId={user.userId} />
          </Route>
          <Route path="/edit/:id/flank/new">
            <NewFlankPage />
          </Route>
          <Route path="/edit/:id/flank/:id">
            <EditFlankPage />
          </Route>
          <Route path="/edit/:id">
            <EditEndcapPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
