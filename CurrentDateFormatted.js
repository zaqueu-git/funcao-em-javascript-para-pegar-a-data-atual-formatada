function CurrentDateFormatted() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = String(today.getFullYear());

  return {
    day: dd,
    month: mm,
    year: yyyy
  }
}