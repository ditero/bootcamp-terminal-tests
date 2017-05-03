module.exports = function findItemsOver20(myList){
  var results = [];

  for(var prop in myList){
    if(myList[prop].qty > 20){

      results.push(myList[prop]);

    }

  }

  return results;
}
