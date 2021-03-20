const Month = (props) => {
  console.log(props)
  return (
    <li className="homepage-promo-selection">
      <form onSubmit={props.handleChangeMonth}>
        <input 
          type="text" 
          value={props.month}
          onChange={props.handleChange}/>
      </form>
    </li>
  )
}

export default Month;