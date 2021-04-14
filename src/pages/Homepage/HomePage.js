import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "../../components/Header/Header";
import EndcapsList from "../../components/Endcaps/EndcapsList";
require("./Homepage.css");

function HomePage(props) {
  const [endcaps, setEndcaps] = useState({
    userEndcaps: [],
    columnOrder: [],
  })


  // let [endcaps, setEndcaps] = useState([])
  // let [columnOrder,setColumnOrder] = useState([])

    const handleFetchEndcaps = () => {
    const tempColumnOrder = ['607653e41534e6626175a40b', '607726d74947d672c85ff13c']
    fetch("http://localhost:5000/endcaps")
    .then((response) => response.json())
    .then((jsonData) => {
      const allEndcaps = jsonData.allEndcaps;
      setEndcaps({
        userEndcaps: allEndcaps,
        columnOrder: tempColumnOrder,
      });
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log(endcaps.userEndcaps)
    if(endcaps.userEndcaps.length === 0) {
      handleFetchEndcaps();
    }
  })

  console.log("HomePage");
  return (
    <div>
      <Header 
      // isLoggedIn={this.props.isLoggedIn} 
      />
      <DragDropContext
        onDragEnd={props.onDragEnd}
      >
        <main>
          {/* {this.props.columnOrder.map(columnId => {
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
          })} */}
        </main>
      </DragDropContext>
    </div>
  )
}

export default HomePage;