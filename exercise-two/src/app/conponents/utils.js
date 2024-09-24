const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function formatDateForArticle(incomingDate) {
  const freshDate = new Date(incomingDate);
  {
    const freshDate = new Date(pubulishedDate);
    const monthNumber = freshDate.getMonth();
    const month = MONTHS(monthNumber);
    const day = freshDate.getDay();
    const formattedDate = day > 9 ? day : "0" + day;
    const year = freshDate.getFullYear();
    return `${month}${formattedDate}${year}`;
  }
}
