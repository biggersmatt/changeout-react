import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
require("./EditEndcap.css");

function EditEndcapPage(props) {
  const [editEndcap, setEditEndcap] = useState({
    title: "",
    itemOne: "",
    itemTwo: "",
    itemThree: "",
    itemFour: "",
    itemFive: "",
    // flankA: "",
    // flankB: "",
  })


  // state = {
  //   title: "",
  //   itemOne: "",
  //   itemTwo: "",
  //   itemThree: "",
  //   itemFour: "",
  //   itemFive: "",
  //   flankA: "",
  //   flankB: "",
  // }

  // componentDidMount() {
  //   fetch(`http://localhost:5000/endcaps/${this.props.match.params.id}`,{
  //     // credentials: "include",
  //   })
  //   .then((response) => response.json())
  //   .then((jsonData) => {
  //     const endcap = jsonData.foundEndcap;
  //     this.setState(endcap);
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
  //   fetch(`http://localhost:5000/endcaps/${this.props.match.params.id}`, {
  //     // credentials: "include",
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

  // handleDeleteEndcap = (endcapId) => {
  //   fetch(`http://localhost:5000/endcaps/${endcapId}`, {
  //     // credentials: "include",
  //     method: "DELETE",
  //   })
  //   fetch("http://localhost:5000/settings")
  //   .then((response) => response.json())
  //   .then((jsonData) => {
  //     const userSetting = jsonData.settings.find((setting) => {
  //       return setting.user === this.props.user._id;
  //     })
  //     const updatedColumnOrder = userSetting.columnOrder.endcapIds.filter((remainingId) => remainingId !== endcapId);
  //     const settings = {
  //       columnOrder: {
  //         id: "column-1",
  //         title: "To Do",
  //         endcapIds: updatedColumnOrder,
  //       },
  //     }
  //     fetch(`http://localhost:5000/settings/${userSetting._id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(settings),
  //     })
  //     .then(() => this.handleDeleteFlank(this.state.flankA))
  //     .then(() => this.handleDeleteFlank(this.state.flankB))
  //     .then(() => this.props.handleHasUpdated(true))
  //     .catch((err) => console.log(err));
  //   })
  // }

  const handleDeleteEndcap = () => {
    fetch(`http://localhost:5000/endcaps/${props.match.params.id}`, {
      method: "DELETE",
    })
    // .then(() => this.handleDeleteFlank(this.state.flankA))
    // .then(() => this.handleDeleteFlank(this.state.flankB))
    .then(() => props.history.push("/home"))
    .catch((err) => console.log(err));
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

  const handleChange = (event) => {
    if(event.target.id === "title") {
      setEditEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          title: event.target.value
        }
      })
    }
    if(event.target.id === "itemOne") {
      setEditEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemOne: event.target.value
        }
      })
    }
    if(event.target.id === "itemTwo") {
      setEditEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemTwo: event.target.value
        }
      })
    }
    if(event.target.id === "itemThree") {
      setEditEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemThree: event.target.value
        }
      })
    }
    if(event.target.id === "itemFour") {
      setEditEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemFour: event.target.value
        }
      })
    }
    if(event.target.id === "itemFive") {
      setEditEndcap(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          itemFive: event.target.value
        }
      })
    }
  }

  //   handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:5000/endcaps/${this.props.match.params.id}`, {
  //     // credentials: "include",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/endcaps/${props.match.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editEndcap),
    })
    .then(() => props.history.push("/home"))
    .catch(err => console.log(err));
  }

  console.log("Edit Endcap");
  return (
    <div className="edit-endcap-wrapper">
      <h1 className="edit-endcap-title">Edit {editEndcap.title}</h1>
      <div className="edit-endcap-header-btns">
      {/* <div id={`${(this.props.endcaps.length === 1 && (this.state.flankA && this.state.flankB)) ? "hidden" : null}`} className="edit-endcap-header-btns"> */}
        <div className="edit-endcap-btn-wrapper">
        {/* <div className="edit-endcap-btn-wrapper" id={this.props.endcaps.length === 1 ? "hidden" : null}> */}
          <Link to="/">
            <i 
              className="far fa-trash-alt edit-endcap-delete-btn" 
              onClick={() => handleDeleteEndcap()}
            >
            </i>
          </Link>
          <h4 className="edit-endcap-btn-title">Delete</h4>
        </div>
        <div id={`${(editEndcap.flankA && editEndcap.flankB) ? "hidden" : null}`} className="edit-endcap-btn-wrapper">
          <Link to={`/edit/${props.match.params.id}/flank/new`}>
            <i 
              className="far fa-plus-square edit-endcap-flank-btn"
            >
            </i>
          </Link>
          <h4 className="edit-endcap-btn-title">Flank</h4>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="edit-endcap-form">
        <div className="edit-endcap-form-section">
          <label className="edit-endcap-form-label" htmlFor="title">Title of Endcap</label>
          <input 
            type="text" 
            id="title" 
            className="edit-endcap-form-input"
            value={editEndcap.title} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-endcap-form-section">
          <label className="edit-endcap-form-label" htmlFor="itemOne">One</label>
          <input 
            type="text" 
            id="itemOne" 
            className="edit-endcap-form-input"
            value={editEndcap.itemOne} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-endcap-form-section">
          <label className="edit-endcap-form-label" htmlFor="itemOne">Two</label>
          <input 
            type="text" 
            id="itemTwo" 
            className="edit-endcap-form-input"
            value={editEndcap.itemTwo} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-endcap-form-section">
          <label className="edit-endcap-form-label" htmlFor="itemOne">Three</label>
          <input 
            type="text" 
            id="itemThree" 
            className="edit-endcap-form-input"
            value={editEndcap.itemThree} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-endcap-form-section">
          <label className="edit-endcap-form-label" htmlFor="itemOne">Four</label>
          <input 
            type="text" 
            id="itemFour" 
            className="edit-endcap-form-input"
            value={editEndcap.itemFour} 
            onChange={handleChange}
          />
        </div>
        <div className="edit-endcap-form-section">
          <label className="edit-endcap-form-label" htmlFor="itemOne">Five</label>
          <input 
            type="text" 
            id="itemFive" 
            className="edit-endcap-form-input"
            value={editEndcap.itemFive} 
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="edit-endcap-btn">Update Endcap</button>
      </form>
    </div>
  )
}

export default withRouter(EditEndcapPage);