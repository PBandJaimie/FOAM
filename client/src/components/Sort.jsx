export default function Sort(props) {
  console.log('sort props: ', props)
  return (
    <div id="sort">
      <div className="sortSentence">I would like to view </div>
      <select className="sortSentence" value={props.filter} onChange={props.changeHandler}>
        <option value="all">all</option>
        <option value="foaming">foaming</option>
        <option value="non-foaming">non-foaming</option>
        <option value="unclassified">unclassified</option>
      </select>
      <div className="sortSentence">images</div>
    </div>
  )
}