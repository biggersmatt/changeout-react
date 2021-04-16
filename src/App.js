import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import NewEndcapPage from "./pages/Endcaps/NewEndcap/NewEndcapPage";
import EditEndcapPage from "./pages/Endcaps/EditEndcap/EditEndcapPage";
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import Navbar from "./components/Navbar/Navbar";
import NewFlankPage from "./pages/Flanks/NewFlank/NewFlankPage";
import EditFlankPage from "./pages/Flanks/EditFlank/EditFlankPage";
import Footer from "./components/Footer/Footer";
require ("./App.css");

function App() {
  // let [userId, setUserId] = useState("");
  const [user, setUser] = useState({
    username: "",
    userId: "",
  })
  // let [endcaps, setEndcaps] = useState([])
  // let [columnOrder,setColumnOrder] = useState([])
  // let [updated, setUpdated] = useState(false)

  // state = {
  //   endcaps: [],
  //   columnOrder: [],
    // columns: {
    //   "column-1": {
    //     id: "column-1",
    //     title: "To do",
    //     endcapIds: [],
    //   }
    // },
    // columnOrder: ["column-1"],
    // hasUpdated: false,
    // isLoggedIn: false,
    // user: ''
  // }
  

  // setIsLoggedIn = () => {
  //   this.setState({isLoggedIn: true}, this.fetchEndcaps())
  // }

  // signup = (data) => {
  //   fetch('http://localhost:5000/users/signup',{
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   .catch((err) => console.log(err))
  // }

  // login = (data) => {
  //   fetch(`http://localhost:5000/users/login`, {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   .then((response) => response.json())
  //   .then((jsonData) => {
  //     this.setState({
  //       user: jsonData,
  //       isLoggedIn: true
  //     })
  //   })
  //   .then(() => this.fetchEndcaps())
  //   .catch((err) => console.log(err))
  // }

  // logout = () => {
  //   fetch(`http://localhost:5000/users/logout`, {
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     })
  //   .then(() => {
  //     this.setState({
  //       endcaps: [],
  //       columns: {
  //         'column-1': {
  //           id: 'column-1',
  //           title: 'To do',
  //           endcapIds: [],
  //         }
  //       },
  //       columnOrder: ['column-1'],
  //       hasUpdated: false,
  //       isLoggedIn: false,
  //       user: ''
  //     })
  //   })
  // }

  // const handleFetchEndcaps = () => {
  //   fetch("http://localhost:5000/endcaps")
  //   .then((response) => response.json())
  //   .then((jsonData) => {
  //     const allEndcaps = jsonData.allEndcaps;
  //     return allEndcaps;
  //     // setEndcaps(allEndcaps);
  //   })
  //   //   const endcapData = jsonData.allEndcaps;
  //   //   fetch("http://localhost:5000/settings", {
  //   //     // credentials: "include"
  //   //   })
  //   //   .then((response) => response.json())
  //   //   .then((jsonData => {
  //   //     const currentColNew = jsonData.settings.find((setting) => {
  //   //       return setting.user === this.state.user._id 
  //   //     })
  //   //     const currentColumnOrder = currentColNew.columnOrder.endcapIds;
  //   //     const newState = {
  //   //       ...this.state,
  //   //       endcaps: endcapData,
  //   //       columns: {
  //   //         ...this.state.columns,
  //   //         "column-1": {
  //   //           ...this.state.columns["column-1"],
  //   //           endcapIds: currentColumnOrder,
  //   //         }
  //   //       },
  //   //     }
  //   //     this.setState(newState);
  //   //   })
  //   // )})
  //     .catch((err) => console.log(err));
  // }
  
  // useEffect(() => {
  //   handleFetchEndcaps();
  //   if(updated){
  //     fetch("http://localhost:5000/endcaps", {
  //       // credentials: "include"
  //     })
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       const endcapData = jsonData.allEndcaps;
  //       if(endcapData.length > this.state.endcaps.length) {
  //         fetch("http://localhost:5000/settings")
  //         .then((response) => response.json())
  //         .then((jsonData) => {
  //             const currentColNew = jsonData.settings.find((setting) => {
  //             return setting.user === this.state.user._id
  //           })
  //           const currentColumnOrder = currentColNew.columnOrder.endcapIds;
  //           const newEndCapId = endcapData[endcapData.length - 1]._id;
  //           currentColumnOrder.push(newEndCapId);
  //           const settings = {
  //             columnOrder: {
  //               id: "column-1",
  //               title: "To Do",
  //               endcapIds: currentColumnOrder,
  //             },
  //           }
  //           // Updates Database with New Order
  //             fetch(`http://localhost:5000/settings/${currentColNew._id}`, {
  //               method: "PUT",
  //               headers: {
  //                 "Content-Type": "application/json",
  //               },
  //               body: JSON.stringify(settings),
  //             })
  //             .then(() => {
  //               const hasUpdated = !this.state.hasUpdated;
  //                 // Sets state With New Order
  //                 this.setState({
  //                   endcaps: endcapData,
  //                   columns: {
  //                     ...this.state.columns,
  //                     "column-1": {
  //                       ...this.state.columns["column-1"],
  //                       endcapIds: currentColumnOrder,
  //                     }
  //                   },
  //                   hasUpdated: hasUpdated,
  //                 })
  //             })
  //             .catch((err) => console.log(err));
  //         })
  //       } else {
  //         fetch("http://localhost:5000/settings")
  //         .then((response) => response.json())
  //         .then((jsonData) => {
  //           const currentColNew = jsonData.settings.find((setting) => {
  //             return setting.user === this.state.user._id
  //           })
  //           const currentColumnOrder = currentColNew.columnOrder.endcapIds;
  //           const hasUpdated = !this.state.hasUpdated;
  //           this.setState({
  //             endcaps: endcapData,
  //             columns: {
  //               ...this.state.columns,
  //               "column-1": {
  //                 ...this.state.columns["column-1"],
  //                 endcapIds: currentColumnOrder,
  //               }
  //             },
  //             hasUpdated: hasUpdated,
  //           })
  //         })
  //       }
  //     })
  //   }
  // })
  
  // componentDidMount() {
  //   // if (this.state.isLoggedIn) {
  //     this.fetchEndcaps()
  //   // }
  // }
  
  // componentDidUpdate() {
    // if(this.state.hasUpdated){
    //   fetch("http://localhost:5000/endcaps", {
    //     // credentials: "include"
    //   })
    //   .then((response) => response.json())
    //   .then((jsonData) => {
    //     const endcapData = jsonData.allEndcaps;
    //     if(endcapData.length > this.state.endcaps.length) {
    //       fetch("http://localhost:5000/settings")
    //       .then((response) => response.json())
    //       .then((jsonData) => {
    //           const currentColNew = jsonData.settings.find((setting) => {
    //           return setting.user === this.state.user._id
    //         })
    //         const currentColumnOrder = currentColNew.columnOrder.endcapIds;
    //         const newEndCapId = endcapData[endcapData.length - 1]._id;
    //         currentColumnOrder.push(newEndCapId);
    //         const settings = {
    //           columnOrder: {
    //             id: "column-1",
    //             title: "To Do",
    //             endcapIds: currentColumnOrder,
    //           },
    //         }
    //         // Updates Database with New Order
    //           fetch(`http://localhost:5000/settings/${currentColNew._id}`, {
    //             method: "PUT",
    //             headers: {
    //               "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(settings),
    //           })
    //           .then(() => {
    //             const hasUpdated = !this.state.hasUpdated;
    //               // Sets state With New Order
    //               this.setState({
    //                 endcaps: endcapData,
    //                 columns: {
    //                   ...this.state.columns,
    //                   "column-1": {
    //                     ...this.state.columns["column-1"],
    //                     endcapIds: currentColumnOrder,
    //                   }
    //                 },
    //                 hasUpdated: hasUpdated,
    //               })
    //           })
    //           .catch((err) => console.log(err));
    //       })
    //     } else {
    //       fetch("http://localhost:5000/settings")
    //       .then((response) => response.json())
    //       .then((jsonData) => {
    //         const currentColNew = jsonData.settings.find((setting) => {
    //           return setting.user === this.state.user._id
    //         })
    //         const currentColumnOrder = currentColNew.columnOrder.endcapIds;
    //         const hasUpdated = !this.state.hasUpdated;
    //         this.setState({
    //           endcaps: endcapData,
    //           columns: {
    //             ...this.state.columns,
    //             "column-1": {
    //               ...this.state.columns["column-1"],
    //               endcapIds: currentColumnOrder,
    //             }
    //           },
    //           hasUpdated: hasUpdated,
    //         })
    //       })
    //     }
    //   })
    // }
  // }
  
  // const handleToggleEndcap = (endcap) => {
  //   console.log(endcap.change)
  //   console.log(endcap._id)
  //   if(!endcap.change) {
  //     const updatedEndcap = {
  //       ...endcap,
  //       change: !endcap.change,
  //     }
  //     console.log("*************")
  //     console.log(updatedEndcap)
  //     console.log("*************")
      // fetch(`http://localhost:5000/endcaps/${endcap._id}`, {
      //   // credentials: "include",
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(endcap),
      // })
      // .then(() => this.handleHasUpdated(true))
      // .catch((err) => console.log(err));
    // }
    // if(!toggle) {
    //   this.state.endcaps.forEach((endcap) => {
    //     if(endcap._id === endcapId) {
    //       const updatedEndcap = {
    //         ...endcap,
    //         change: true,
    //       }
    //       fetch(`http://localhost:5000/endcaps/${endcapId}`, {
    //         // credentials: "include",
    //         method: "PUT",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(updatedEndcap),
    //       })
    //       .then(() => this.handleHasUpdated(true))
    //       .catch((err) => console.log(err));
    //     }
    //   })
    // } else {
    //   this.state.endcaps.forEach((endcap) => {
    //     if(endcap._id === endcapId) {
    //       const updatedEndcap = {
    //         ...endcap,
    //         change: false,
    //       }
    //       fetch(`http://localhost:5000/endcaps/${endcapId}`, {
    //         // credentials: "include",
    //         method: "PUT",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(updatedEndcap),
    //       })
    //       .then(() => this.handleHasUpdated(true))
    //       .catch((err) => console.log(err));
    //     }
    //   })
    // }
  // }

  // const handleToggleFlank = (toggle, flank) => {
  //   if(!toggle) {
  //     const updatedFlank = {
  //       ...flank,
  //       change: true,
  //     }
  //     fetch(`http://localhost:5000/flanks/${flank._id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(updatedFlank),
  //     })
  //     .then(() => this.handleHasUpdated(true))
  //     .catch((err) => console.log(err));
  //   } else {
  //     const updatedFlank = {
  //       ...flank,
  //       change: false,
  //     }
  //     fetch(`http://localhost:5000/flanks/${flank._id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(updatedFlank),
  //     })
  //     .then(() => this.handleHasUpdated(true))
  //     .catch((err) => console.log(err));
  //   }
  // }
  
  // const handleHasUpdated = (hasUpdated) => {
  //   this.setState({
  //     hasUpdated: hasUpdated,
  //   })
  // }

  // const handleChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   })
  // }
  
  // const onDragEnd = (result) => {
  //   const { destination, source, draggableId } = result;
  //   if(!destination) {
  //     return;
  //   }
  //   if(
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }
  //   this.setState(function(state) {
  //     const newEndcapIds = [...state.columns["column-1"].endcapIds];
  //     const sourceIndex = source.index;
  //     const destinationIndex = destination.index;
  //     newEndcapIds.splice(sourceIndex, 1);
  //     newEndcapIds.splice(destinationIndex, 0, draggableId);
  //     const newColumnOne = {
  //       ...state.columns["column-1"],
  //       endcapIds: [...newEndcapIds],
  //     }
  //     return {
  //       ...state,
  //       columns: {
  //         ...state.columns,
  //         "column-1": newColumnOne,
  //       }
  //     }
  //   });
  //   // Update column in Database
  //   fetch("http://localhost:5000/settings")
  //   .then((response) => response.json())
  //   .then((jsonData) => {
  //     const userSetting = jsonData.settings.find((setting) => {
  //       return setting.user === this.state.user._id;
  //     })
  //       const settings = {
  //         columnOrder: {
  //           id: "column-1",
  //           title: "To Do",
  //           endcapIds: this.state.columns["column-1"].endcapIds,
  //         },
  //       }
  //       fetch(`http://localhost:5000/settings/${userSetting._id}`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(settings),
  //       })
  //       .catch((err) => console.log(err));
  //   })
  // }

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

  console.log("App.js");
  return (
    <div className="wrapper">
      <Navbar
        username={user.username}
        handleSignOut={handleSignOut}
        // userId={user.userId}
        // user={this.state.user}
        // isLoggedIn={this.state.isLoggedIn}
        // logout={this.logout}
      />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <LoginPage
            handleUserId={handleUserInfo}
              // handleHistory={this.handleHistory}
              // login={this.login}
              // isLoggedIn={this.state.isLoggedIn}
              // setIsLoggedIn={this.setIsLoggedIn} 
            />
          </Route>
          <Route path="/signup">
            <SignupPage 
              // signup={this.signup}
              // isLoggedIn={this.state.isLoggedIn}
              // setIsLoggedIn={this.setIsLoggedIn}
            />
          </Route>
          <Route exact path="/home">
            <HomePage 
              // handleChange={handleChange}
              userId={user.userId}
              // handleToggleEndcap={handleToggleEndcap}
              // handleToggleFlank={handleToggleFlank}
              // handleFetchEndcaps={handleFetchEndcaps}
              // columnOrder={columnOrder}
              // columns={this.state.columns}
              // endcaps={endcaps}
              // onDragEnd={onDragEnd}
              // isLoggedIn={this.state.isLoggedIn}
            />
          </Route>
          {/* {this.state.isLoggedIn &&  */}
          <Route path="/new">
            <NewEndcapPage 
              userId={user.userId}
              // handleHasUpdated={handleHasUpdated}
            />
          </Route>
          {/* } */}
          {/* {this.state.isLoggedIn &&  */}
          <Route path="/edit/:id/flank/new">
            <NewFlankPage 
              // handleHasUpdated={handleHasUpdated}
            />
          </Route>
          {/* } */}
          {/* {this.state.isLoggedIn &&  */}
          <Route path="/edit/:id/flank/:id">
            <EditFlankPage 
              // handleHasUpdated={handleHasUpdated}
            />
          </Route>
          {/* } */}
          {/* {this.state.isLoggedIn &&  */}
          <Route path="/edit/:id">
            <EditEndcapPage 
              // handleHasUpdated={handleHasUpdated}
              // endcaps={endcaps}
              // columnOrder={columnOrder}
              // user={this.state.user}
            />
          </Route>
          {/* } */}
          {/* <Route path="/" render={() => <Redirect to="/login"/>} /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
