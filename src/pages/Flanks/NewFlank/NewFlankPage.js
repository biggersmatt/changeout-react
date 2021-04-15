import React, { useState } from "react";
import { withRouter } from "react-router-dom";
require("./NewFlankPage.css");

function NewFlankPage(props) {
  const [newFlank, setNewFlank] = useState({
    title: "",
    itemOne: "",
    itemTwo: "",
    itemThree: "",
    itemFour: "",
    itemFive: "",
    change: false,
    side: "",
    endcap: props.match.params.id,
  })

  // state = {
  //   currentEndcap: {},
  //   selectedEndcap: "",
  //   title: "",
  //   itemOne: "",
  //   itemTwo: "",
  //   itemThree: "",
  //   itemFour: "",
  //   itemFive: "",
  //   change: false,
  //   side: "",
  // }

  // componentDidMount() {
  //   fetch("http://localhost:5000/endcaps", {
  //     // credentials: "include",
  //   })
  //   .then((response) => response.json())
  //   .then((jsonData => {
  //     const endcapData = jsonData.allEndcaps;
  //     let currentEndcap = {};
  //     endcapData.map(endcap => {
  //       if(endcap._id === this.props.match.params.id)
  //       currentEndcap = endcap;
  //       return currentEndcap;
  //     })
  //     this.setState({
  //       currentEndcap: currentEndcap,
  //       selectedEndcap: this.props.match.params.id,
  //     })
  //   }))
  //   .catch((err) => (console.log(err)))
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.value,
  //   })
  // }

  const handleChange = (event) => {
    if(event.target.id === "title") {
      setNewFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          title: event.target.value,
        }
      })
    }
    if(event.target.id === "itemOne") {
      setNewFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemOne: event.target.value,
        }
      })
    }
    if(event.target.id === "itemTwo") {
      setNewFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemTwo: event.target.value,
        }
      })
    }
    if(event.target.id === "itemThree") {
      setNewFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemThree: event.target.value,
        }
      })
    }
    if(event.target.id === "itemFour") {
      setNewFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemFour: event.target.value,
        }
      })
    }
    if(event.target.id === "itemFive") {
      setNewFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemFive: event.target.value,
        }
      })
    }
  }
  
  const handleSide = (updatedSide) => {
    setNewFlank(preNewEndcap => {
      return {
        ...preNewEndcap,
        side: updatedSide,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/flanks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFlank),
    })
    .then(() => props.history.push("/home"))
    .catch(err => console.log(err));
    // event.preventDefault();
    // fetch("http://localhost:5000/flanks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(this.state),
    // })
    // .then(() => this.props.history.push("/"))
    // .then(() => this.props.handleHasUpdated(true))
    // .catch((err) => console.log(err));
  }

  console.log("New Flank Page");
  return (
    <div className="new-flank-wrapper">
      <h1 className="new-flank-title">Add Flank to {newFlank.title}</h1>
      <form onSubmit={handleSubmit}  className="new-flank-form">
        <h3>Choose a Side</h3>
        <div className="new-flank-side-btns">
          <div 
            id={`${newFlank.flankA ? "hidden" : null}`}
            className={`new-flank-side-btn ${newFlank.side === "A" ? "side-selected" : null}`} 
            onClick={() => handleSide("A")}
          >A
          </div>
          <div 
            id={`${newFlank.flankB ? "hidden" : null}`}
            className={`new-flank-side-btn ${newFlank.side === "B" ? "side-selected" : null}`} 
            onClick={() => handleSide("B")}
          >B
          </div>
        </div>
        <div className="new-flank-form-section">
          <label className="new-flank-form-label" htmlFor="title">Title of Flank</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Enter Title"
            className="new-flank-form-input"
            value={newFlank.title} 
            onChange={handleChange}
          />
        </div>
        <div className="new-flank-form-section">
          <label className="new-flank-form-label" htmlFor="itemOne">One</label>
          <input 
            type="text" 
            id="itemOne" 
            name="itemOne" 
            placeholder="Enter Item"
            className="new-flank-form-input"
            value={newFlank.itemOne} 
            onChange={handleChange} 
          />
        </div>
        <div className="new-flank-form-section">
          <label className="new-flank-form-label" htmlFor="itemOne">Two</label>
          <input 
            type="text" 
            id="itemTwo" 
            name="itemTwo"
            placeholder="Enter Item"
            className="new-flank-form-input"
            value={newFlank.itemTwo} 
            onChange={handleChange} 
          />
        </div>
        <div className="new-flank-form-section">
          <label className="new-flank-form-label" htmlFor="itemOne">Three</label>
          <input 
            type="text" 
            id="itemThree" 
            name="itemThree" 
            placeholder="Enter Item"
            className="new-flank-form-input"
            value={newFlank.itemThree} 
            onChange={handleChange}
          />
        </div>
        <div className="new-flank-form-section">
          <label className="new-flank-form-label" htmlFor="itemOne">Four</label>
          <input 
            type="text" 
            id="itemFour" 
            name="itemFour" 
            placeholder="Enter Item"
            className="new-flank-form-input"
            value={newFlank.itemFour} 
            onChange={handleChange}
          />
        </div>
        <div className="new-flank-form-section">
          <label className="new-flank-form-label" htmlFor="itemOne">Five</label>
          <input 
            type="text" 
            id="itemFive" 
            name="itemFive"
            placeholder="Enter Item"
            className="new-flank-form-input"
            value={newFlank.itemFive} 
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="new-flank-btn">Add Flank</button>
      </form>
    </div>
  )
}

export default withRouter(NewFlankPage);