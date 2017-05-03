module.exports = function countAllFromTown(RegNo,location){
  var strSplit = RegNo.split(',');
  var locArray = [];

  for (var i = 0;i<strSplit.length;i++){
    var numVal = strSplit[i].trim()

      if(numVal.startsWith(location)){
        locArray.push(numVal)

      }
    }
  return locArray.length
};
