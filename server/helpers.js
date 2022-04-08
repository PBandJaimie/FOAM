module.exports.totalPages = (numberOfPics) => {
  let pagesNeeded = numberOfPics / 20;
  return Math.ceil(pagesNeeded);
}

module.exports.mapPicsToPages = (pageNumber) => {
  let startToEnd = {};
  startToEnd.end = pageNumber * 20;
  startToEnd.start = startToEnd.end - 19;
  return startToEnd;
}