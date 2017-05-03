module.exports = function yearsAgo(myYears){

  var thisYear = new Date();

  var fromYear = thisYear.getFullYear();

  var results = fromYear - myYears;


  return results;
}
