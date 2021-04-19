import React, { useState } from "react";
import { withRouter } from "react-router-dom";
require ("./NewEndcap.css");

function NewEndcapPage(props) {
  const [newEndcap, setNewEndcap] = useState({
    title: "",
    itemOne: "",
    itemTwo: "",
    itemThree: "",
    itemFour: "",
    itemFive: "",
    change: false,
    user: props.userId,
  })

  const handleChange = (event) => {
    if(event.target.id === "title") {
      setNewEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          title: event.target.value
        }
      })
    }
    if(event.target.id === "itemOne") {
      setNewEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemOne: event.target.value
        }
      })
    }
    if(event.target.id === "itemTwo") {
      setNewEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemTwo: event.target.value
        }
      })
    }
    if(event.target.id === "itemThree") {
      setNewEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemThree: event.target.value
        }
      })
    }
    if(event.target.id === "itemFour") {
      setNewEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemFour: event.target.value
        }
      })
    }
    if(event.target.id === "itemFive") {
      setNewEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemFive: event.target.value
        }
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newEndcap.title) {
      alert("Endcaps require a title");
    } else {
      fetch("http://localhost:5000/endcaps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEndcap),
      })
      .then(() => props.history.push("/home"))
      .catch(err => console.log(err));
    }
  }

  return (
    <div className="new-endcap-wrapper">
      <h1 className="new-endcap-title">New Endcap</h1>
      <form onSubmit={handleSubmit}  className="new-endcap-form shadow">
        <div className="new-endcap-form-section">
          <label className="new-endcap-form-label" htmlFor="title">Title of Endcap</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Enter Title"
            value={newEndcap.title} 
            onChange={handleChange}
            className="new-endcap-form-input"
          />
        </div>
        <div className="new-endcap-form-section">
          <label className="new-endcap-form-label" htmlFor="itemOne">One</label>
          <input 
            type="text" 
            id="itemOne" 
            name="itemOne" 
            placeholder="Enter Item"
            value={newEndcap.itemOne} 
            onChange={handleChange}
            className="new-endcap-form-input" 
          />
        </div>
        <div className="new-endcap-form-section">
          <label className="new-endcap-form-label" htmlFor="itemTwo">Two</label>
          <input 
            type="text" 
            id="itemTwo" 
            name="itemTwo"
            placeholder="Enter Item"
            value={newEndcap.itemTwo} 
            onChange={handleChange}
            className="new-endcap-form-input" 
          />
        </div>
        <div className="new-endcap-form-section">
          <label className="new-endcap-form-label" htmlFor="itemThree">Three</label>
          <input 
            type="text" 
            id="itemThree" 
            name="itemThree" 
            placeholder="Enter Item"
            value={newEndcap.itemThree} 
            onChange={handleChange}
            className="new-endcap-form-input"
          />
        </div>
        <div className="new-endcap-form-section">
          <label className="new-endcap-form-label" htmlFor="itemFour">Four</label>
          <input 
            type="text" 
            id="itemFour" 
            name="itemFour" 
            placeholder="Enter Item"
            value={newEndcap.itemFour} 
            onChange={handleChange}
            className="new-endcap-form-input"
          />
        </div>
        <div className="new-endcap-form-section">
          <label className="new-endcap-form-label" htmlFor="itemFive">Five</label>
          <input 
            type="text" 
            id="itemFive" 
            name="itemFive"
            placeholder="Enter Item"
            value={newEndcap.itemFive} 
            onChange={handleChange}
            className="new-endcap-form-input"
          />
        </div>
        <button type="submit" className="new-endcap-btn shadow">Add Endcap</button>
      </form>
    </div>
  )
}

export default withRouter(NewEndcapPage);