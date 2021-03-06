import React from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import Month from '../components/Promo/Month';
import Period from '../components/Promo/Period';
import EndcapsList from '../components/Endcaps/EndcapsList';

class HomePage extends React.Component {
  state = {
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
        <DragDropContext
          onDragEnd={this.onDragEnd}
        >
          <main>
            {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => {
            return this.state.endcaps.find((endcap) => endcap._id === taskId);
            });
            return <EndcapsList 
                      endcaps={tasks}
                      key={column.id}  
                      column={column} 
                    />;
            })}
          </main>
        </DragDropContext>
      </div>
    )
  }
}

export default HomePage;