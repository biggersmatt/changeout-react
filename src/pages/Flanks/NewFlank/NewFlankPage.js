import React, { useState, useEffect } from "react";
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
    endcap: {},
  })

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

  const handleFetchSelectedEndcap = () => {
    fetch(`http://localhost:5000/endcaps/${props.match.params.id}`)
    .then((response) => response.json())
    .then((jsonData) => {
      const endcap = jsonData.foundEndcap;
      setNewFlank(preNewEndcap => {
        return {
          ...preNewEndcap,
          endcap: endcap,
        }
      })
    })
    .catch(err => console.log(err));
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
  }

  useEffect(() => {
    handleFetchSelectedEndcap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("New Flank Page");
  console.log(newFlank.endcap)
  return (
    <div className="new-flank-wrapper">
      <h1 className="new-flank-title">Add Flank to {newFlank.title}</h1>
      <form onSubmit={handleSubmit}  className="new-flank-form">
        <h3>Choose a Side</h3>
        <div className="new-flank-side-btns">
          <div 
            id={`${newFlank.endcap.flankA ? "hidden" : null}`}
            className={`new-flank-side-btn ${newFlank.side === "A" ? "side-selected" : null}`} 
            onClick={() => handleSide("A")}
          >A
          </div>
          <div 
            id={`${newFlank.endcap.flankB ? "hidden" : null}`}
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