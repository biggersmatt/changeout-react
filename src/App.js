import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import NewEndcapPage from './pages/Endcaps/NewEndcap/NewEndcapPage';
import EditEndcapPage from './pages/Endcaps/EditEndcap/EditEndcapPage';
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import Navbar from './components/Navbar/Navbar';
import NewFlankPage from './pages/Flanks/NewFlank/NewFlankPage';
import EditFlankPage from './pages/Flanks/EditFlank/EditFlankPage';
import Footer from './components/Footer/Footer';
require ('./App.css');

class App extends React.Component {
  state = {
    endcaps: [],
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        endcapIds: [],
      }
    },
    columnOrder: ['column-1'],
    hasUpdated: false,
    isLoggedIn: false,
    user: ''
  }
  

  setIsLoggedIn = () => {
    this.setState({isLoggedIn: true}, this.fetchEndcaps())
  }

  signup = (data) => {
    fetch('https://gentle-savannah-74717.herokuapp.com/users/signup',{
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .catch((err) => console.log(err))
  }

  login = (data) => {
    fetch(`https://gentle-savannah-74717.herokuapp.com/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((jsonData) => {
      this.setState({
        user: jsonData,
        isLoggedIn: true
      })
    })
    .then(() => this.fetchEndcaps())
    .catch((err) => console.log(err))
  }

  logout = () => {
    fetch(`https://gentle-savannah-74717.herokuapp.com/users/logout`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    .then(() => {
      this.setState({
        endcaps: [],
        columns: {
          'column-1': {
            id: 'column-1',
            title: 'To do',
            endcapIds: [],
          }
        },
        columnOrder: ['column-1'],
        hasUpdated: false,
        isLoggedIn: false,
        user: ''
      })
    })
  }

  fetchEndcaps = () => {
    fetch('https://gentle-savannah-74717.herokuapp.com/endcaps', {
      credentials: 'include'
    })
    .then((response) => response.json())
    .then((jsonData) => {
      const endcapData = jsonData.allEndcaps;
      fetch('https://gentle-savannah-74717.herokuapp.com/settings', {
        credentials: 'include'
      })
      .then((response) => response.json())
      .then((jsonData => {
        const currentColNew = jsonData.settings.find((setting) => {
          return setting.user === this.state.user._id 
        })
        const currentColumnOrder = currentColNew.columnOrder.endcapIds;
        const newState = {
          ...this.state,
          endcaps: endcapData,
          columns: {
            ...this.state.columns,
            'column-1': {
              ...this.state.columns['column-1'],
              endcapIds: currentColumnOrder,
            }
          },
        }
        this.setState(newState);
      })
    )})
      .catch((err) => console.log(err));
  }
  
  componentDidMount() {
    if (this.state.isLoggedIn) {
      this.fetchEndcaps()
    }
  }
  
  componentDidUpdate() {
    if(this.state.hasUpdated){
      fetch('https://gentle-savannah-74717.herokuapp.com/endcaps', {
        credentials: "include"
      })
      .then((response) => response.json())
      .then((jsonData) => {
        const endcapData = jsonData.allEndcaps;
        if(endcapData.length > this.state.endcaps.length) {
          fetch('https://gentle-savannah-74717.herokuapp.com/settings')
          .then((response) => response.json())
          .then((jsonData) => {
              const currentColNew = jsonData.settings.find((setting) => {
              return setting.user === this.state.user._id
            })
            const currentColumnOrder = currentColNew.columnOrder.endcapIds;
            const newEndCapId = endcapData[endcapData.length - 1]._id;
            currentColumnOrder.push(newEndCapId);
            const settings = {
              columnOrder: {
                id: 'column-1',
                title: 'To Do',
                endcapIds: currentColumnOrder,
              },
            }
            // Updates Database with New Order
              fetch(`https://gentle-savannah-74717.herokuapp.com/settings/${currentColNew._id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(settings),
              })
              .then(() => {
                const hasUpdated = !this.state.hasUpdated;
                  // Sets state With New Order
                  this.setState({
                    endcaps: endcapData,
                    columns: {
                      ...this.state.columns,
                      'column-1': {
                        ...this.state.columns['column-1'],
                        endcapIds: currentColumnOrder,
                      }
                    },
                    hasUpdated: hasUpdated,
                  })
              })
              .catch((err) => console.log(err));
          })
        } else {
          fetch('https://gentle-savannah-74717.herokuapp.com/settings')
          .then((response) => response.json())
          .then((jsonData) => {
            const currentColNew = jsonData.settings.find((setting) => {
              return setting.user === this.state.user._id
            })
            const currentColumnOrder = currentColNew.columnOrder.endcapIds;
            const hasUpdated = !this.state.hasUpdated;
            this.setState({
              endcaps: endcapData,
              columns: {
                ...this.state.columns,
                'column-1': {
                  ...this.state.columns['column-1'],
                  endcapIds: currentColumnOrder,
                }
              },
              hasUpdated: hasUpdated,
            })
          })
        }
      })
    }
  }
  
  handleToggleEndcap = (toggle, endcapId) => {
    if(!toggle) {
      this.state.endcaps.forEach((endcap) => {
        if(endcap._id === endcapId) {
          const updatedEndcap = {
            ...endcap,
            change: true,
          }
          fetch(`https://gentle-savannah-74717.herokuapp.com/endcaps/${endcapId}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEndcap),
          })
          .then(() => this.handleHasUpdated(true))
          .catch((err) => console.log(err));
        }
      })
    } else {
      this.state.endcaps.forEach((endcap) => {
        if(endcap._id === endcapId) {
          const updatedEndcap = {
            ...endcap,
            change: false,
          }
          fetch(`https://gentle-savannah-74717.herokuapp.com/endcaps/${endcapId}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEndcap),
          })
          .then(() => this.handleHasUpdated(true))
          .catch((err) => console.log(err));
        }
      })
    }
  }

  handleToggleFlank = (toggle, flank) => {
    if(!toggle) {
      const updatedFlank = {
        ...flank,
        change: true,
      }
      fetch(`https://gentle-savannah-74717.herokuapp.com/flanks/${flank._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFlank),
      })
      .then(() => this.handleHasUpdated(true))
      .catch((err) => console.log(err));
    } else {
      const updatedFlank = {
        ...flank,
        change: false,
      }
      fetch(`https://gentle-savannah-74717.herokuapp.com/flanks/${flank._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFlank),
      })
      .then(() => this.handleHasUpdated(true))
      .catch((err) => console.log(err));
    }
  }
  
  handleHasUpdated = (hasUpdated) => {
    this.setState({
      hasUpdated: hasUpdated,
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if(!destination) {
      return;
    }
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    this.setState(function(state) {
      const newEndcapIds = [...state.columns['column-1'].endcapIds];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      newEndcapIds.splice(sourceIndex, 1);
      newEndcapIds.splice(destinationIndex, 0, draggableId);
      const newColumnOne = {
        ...state.columns['column-1'],
        endcapIds: [...newEndcapIds],
      }
      return {
        ...state,
        columns: {
          ...state.columns,
          'column-1': newColumnOne,
        }
      }
    });
    // Update column in Database
    fetch('https://gentle-savannah-74717.herokuapp.com/settings')
    .then((response) => response.json())
    .then((jsonData) => {
      const userSetting = jsonData.settings.find((setting) => {
        return setting.user === this.state.user._id;
      })
        const settings = {
          columnOrder: {
            id: 'column-1',
            title: 'To Do',
            endcapIds: this.state.columns['column-1'].endcapIds,
          },
        }
        fetch(`https://gentle-savannah-74717.herokuapp.com/settings/${userSetting._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(settings),
        })
        .catch((err) => console.log(err));
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar
          user={this.state.user}
          isLoggedIn={this.state.isLoggedIn}
          logout={this.logout}/>
        <div className="content">
          <Switch>
            <Route path='/login'>
              <LoginPage
                handleHistory={this.handleHistory}
                login={this.login}
                isLoggedIn={this.state.isLoggedIn}
                setIsLoggedIn={this.setIsLoggedIn} />
            </Route>
            <Route path='/signup'>
              <SignupPage 
                signup={this.signup}
                isLoggedIn={this.state.isLoggedIn}
                setIsLoggedIn={this.setIsLoggedIn}
              />
            </Route>
            <Route exact path='/'>
              <HomePage 
                handleChange={this.handleChange}
                handleToggleEndcap={this.handleToggleEndcap}
                handleToggleFlank={this.handleToggleFlank}
                columnOrder={this.state.columnOrder}
                columns={this.state.columns}
                endcaps={this.state.endcaps}
                onDragEnd={this.onDragEnd}
                isLoggedIn={this.state.isLoggedIn}
              />
            </Route>
            {this.state.isLoggedIn && <Route path='/new'>
              <NewEndcapPage 
                handleHasUpdated={this.handleHasUpdated}
              />
            </Route>}
            {this.state.isLoggedIn && <Route path='/edit/:id/flank/new'>
              <NewFlankPage 
                handleHasUpdated={this.handleHasUpdated}
              />
            </Route>}
            {this.state.isLoggedIn && <Route path='/edit/:id/flank/:id'>
              <EditFlankPage 
                handleHasUpdated={this.handleHasUpdated}
              />
            </Route>}
            {this.state.isLoggedIn && <Route path='/edit/:id'>
              <EditEndcapPage 
                handleHasUpdated={this.handleHasUpdated}
                endcaps={this.state.endcaps}
                endcapsIds={this.state.columns['column-1'].endcapIds}
                user={this.state.user}
              />
            </Route>}
            <Route path="/" render={() => <Redirect to="/login"/>} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
