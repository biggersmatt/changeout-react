import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
require("./EditFlankPage.css");

function EditFlankPage(props) {
    const [editFlank, setEditFlank] = useState({
      title: "",
      itemOne: "",
      itemTwo: "",
      itemThree: "",
      itemFour: "",
      itemFive: "",
    })


  // state = {
  //   title: "",
  //   itemOne: "",
  //   itemTwo: "",
  //   itemThree: "",
  //   itemFour: "",
  //   itemFive: "",
  // }

  const handleFetchSelectedFlank = () => {
    fetch(`http://localhost:5000/flanks/${props.match.params.id}`)
    .then((response) => response.json())
    .then((jsonData) => {
      const flank = jsonData.foundFlank;
      setEditFlank({
        title: flank.title,
        itemOne: flank.itemOne,
        itemTwo: flank.itemTwo,
        itemThree: flank.itemThree,
        itemFour: flank.itemFour,
        itemFive: flank.itemFive,
      })
    })
    .catch(err => console.log(err));
  }

  // componentDidMount() {
  //   fetch(`http://localhost:5000/flanks/${this.props.match.params.id}`)
  //   .then((response) => response.json())
  //   .then((jsonData) => {
  //     const flank = jsonData.foundFlank;
  //     this.setState({
  //       title: flank.title,
  //       itemOne: flank.itemOne,
  //       itemTwo: flank.itemTwo,
  //       itemThree: flank.itemThree,
  //       itemFour: flank.itemFour,
  //       itemFive: flank.itemFive,
  //     })
  //   })
  //   .catch((err) => console.log(err));
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:5000/flanks/${this.props.match.params.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(this.state),
  //   })
  //   .then(() => this.props.history.push("/"))
  //   .then(() => this.props.handleHasUpdated(true))
  //   .catch((err) => console.log(err));
  // }

  const handleDeleteFlank = () => {
    fetch(`http://localhost:5000/flanks/${props.match.params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props)
    })
    .then(() => props.history.push("/home"))
    .catch(err => console.log(err));
  }

  const handleChange = (event) => {
    if(event.target.id === "title") {
      setEditFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          title: event.target.value
        }
      })
    }
    if(event.target.id === "itemOne") {
      setEditFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemOne: event.target.value
        }
      })
    }
    if(event.target.id === "itemTwo") {
      setEditFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemTwo: event.target.value
        }
      })
    }
    if(event.target.id === "itemThree") {
      setEditFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemThree: event.target.value
        }
      })
    }
    if(event.target.id === "itemFour") {
      setEditFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemFour: event.target.value
        }
      })
    }
    if(event.target.id === "itemFive") {
      setEditFlank(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemFive: event.target.value
        }
      })
    }
  }

  // handleDeleteFlank = (flankId) => {
  //   fetch(`http://localhost:5000/flanks/${flankId}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(this.props)
  //   })
  //   .then(() => this.props.handleHasUpdated(true))
  //   .catch((err) => console.log(err))
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/flanks/${props.match.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFlank),
    })
    .then(() => props.history.push("/home"))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    handleFetchSelectedFlank();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("Edit Flank Page");
  return (
    <div className="edit-flank-wrapper">
      <h1 className="edit-flank-title">Edit {editFlank.title}</h1>
      <div className="edit-flank-header">
        <div className="edit-flank-btn-wrapper">
          <Link to="/">
            <i 
              className="far fa-trash-alt edit-flank-delete-btn"
              onClick={() => handleDeleteFlank(props.match.params.id)}
            >
            </i>
          </Link>
          <h4>Delete</h4>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="edit-flank-form">
        <div className="edit-flank-form-section">
          <label className="edit-flank-form-label" htmlFor="title">Title of Flank</label>
          <input 
            type="text" 
            id="title" 
            className="edit-flank-form-input"
            value={editFlank.title} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-flank-form-section">
          <label className="edit-flank-form-label" htmlFor="itemOne">One</label>
          <input 
            type="text"  
            id="itemOne" 
            className="edit-flank-form-input"
            value={editFlank.itemOne} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-flank-form-section">
          <label className="edit-flank-form-label" htmlFor="itemOne">Two</label>
          <input 
            type="text" 
            id="itemTwo" 
            className="edit-flank-form-input"
            value={editFlank.itemTwo} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-flank-form-section">
          <label className="edit-flank-form-label" htmlFor="itemOne">Three</label>
          <input 
            type="text" 
            id="itemThree" 
            className="edit-flank-form-input"
            value={editFlank.itemThree} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-flank-form-section">
          <label className="edit-flank-form-label" htmlFor="itemOne">Four</label>
          <input 
            type="text" 
            id="itemFour" 
            className="edit-flank-form-input"
            value={editFlank.itemFour} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-flank-form-section">
          <label className="edit-flank-form-label" htmlFor="itemOne">Five</label>
          <input 
            type="text" 
            id="itemFive" 
            className="edit-flank-form-input"
            value={editFlank.itemFive} 
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="edit-flank-submit">Update Flank</button>
      </form>
    </div>
  )
}

export default withRouter(EditFlankPage);