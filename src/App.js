import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewEndcapPage from './pages/NewEndcapPage';
import EditEndcapPage from './pages/EditEndcapPage';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends React.Component {
  state = {
    month: '',
    period: '',
    endcaps: [],
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: [],
      }
    },
    columnOrder: ['column-1'],
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/endcaps')
      .then((response) => response.json())
      .then((jsonData) => {
        const endcapData = jsonData.allEndcaps;
        const updatedTaskIds = endcapData.map((endcap) => {
          return endcap._id;
        })
        const columnOneClone = {...this.state.columns['column-1']}
        columnOneClone.taskIds = updatedTaskIds;
        const newState = {
          ...this.state,
          endcaps: endcapData,
          columns: {
            ...this.state.columns,
            'column-1': columnOneClone,
          }
        }
        this.setState(newState);
      })
      .catch()
  }

  handleChangeMonth = (event) => {
    const monthIndex = event.target.value;
    this.setState({ month: monthIndex });
  }

  handleChangePeriod = (event) => {
    const periodIndex = event.target.value;
    this.setState({ period: periodIndex });
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
      const newTaskIds = [...state.columns['column-1'].taskIds];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      newTaskIds.splice(sourceIndex, 1);
      newTaskIds.splice(destinationIndex, 0, draggableId);
      const newColumnOne = {
        ...state.columns['column-1'],
        taskIds: [...newTaskIds],
      }
      return {
        ...state,
        columns: {
          ...state.columns,
          'column-1': newColumnOne,
        }
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <HomePage 
                month={this.state.month} 
                period={this.state.period} 
                handleChangeMonth={this.handleChangeMonth} 
                handleChangePeriod={this.handleChangePeriod} 
                columnOrder={this.state.columnOrder}
                columns={this.state.columns}
                endcaps={this.state.endcaps}
                onDragEnd={this.onDragEnd}
              />
            </Route>
            <Route exact path='/new' component={NewEndcapPage} />
            <Route exact path='/edit/:id' component={EditEndcapPage} />
          </Switch>
        </div>
        <footer>
          ChangeOut 2021&copy;
        </footer>
      </div>
    );
  }
}

export default App;
