import React from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import Month from '../components/Promo/Month';
import Period from '../components/Promo/Period';
import EndcapsList from '../components/Endcaps/EndcapsList';

class HomePage extends React.Component {
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
          onDragEnd={this.props.onDragEnd}
        >
          <main>
            {this.props.columnOrder.map(columnId => {
            const column = this.props.columns[columnId];
            const endcaps = column.endcapIds.map(endcapId => {
            return this.props.endcaps.find((endcap) => endcap._id === endcapId);
            });
            return <EndcapsList 
                      handleToggleClass={this.props.handleToggleClass}
                      endcaps={endcaps}
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