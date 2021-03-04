const Period = (props) => {
  return (
    <li className="homepage-promo-selection">
      <select  defaultValue={props.period} onChange={props.handleChangePeriod}>
        <option value="0">A</option>
        <option value="1">B</option>
        <option value={props.period} hidden>{props.period}</option>
      </select>
    </li>
  )
}

export default Period;