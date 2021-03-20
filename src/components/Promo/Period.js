const Period = (props) => {
  return (
    <li className="homepage-promo-selection">
      <input type="text" placeholder={props.period}/>
      {/* onChange={props.handleChangePeriod} */}
    </li>
  )
}

export default Period;