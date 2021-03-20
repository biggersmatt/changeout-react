const Month = (props) => {
  console.log(props.month)
  return (
    <li className="homepage-promo-selection">
      <input type="text" placeholder={props.month}/>
      {/* onChange={props.handleChangeMonth} */}
    </li>
  )
}

export default Month;