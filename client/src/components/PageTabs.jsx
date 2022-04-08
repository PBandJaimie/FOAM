export default function PageTabs(props) {
  let last;
  let next;
  if (props.currentPage === 1) {
    last = (
      <div
        className="generic nope">
        &laquo;&nbsp;last
      </div>
    )
  } else {
    last = (
      <div
        className="generic"
        onClick={() => {props.clickHandler(props.currentPage - 1)}}>
        &laquo;&nbsp;last
      </div>
    );
  };

  if (props.currentPage === props.totalPages) {
    next = (
      <div
        className="generic nope">
        next&nbsp;&raquo;
      </div>
    )
  } else {
    next = (
      <div
        className="generic"
        onClick={() => {props.clickHandler(props.currentPage + 1)}}>
        next&nbsp;&raquo;
      </div>
    )
  };

  return (
    <div id="tabs">
      {last}
      <div className="currentPage">
        {props.currentPage}
      </div>
      {next}
    </div>
  )
}

