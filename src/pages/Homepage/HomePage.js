import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "../../components/Header/Header";
import EndcapsList from "../../components/Endcaps/EndcapsList";
require("./Homepage.css");

function HomePage() {
  console.log("HomePage");
  return (
    <div>
      <Header 
      // isLoggedIn={this.props.isLoggedIn} 
      />
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
                    handleToggleEndcap={this.props.handleToggleEndcap}
                    handleToggleFlank={this.props.handleToggleFlank}
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

export default HomePage;