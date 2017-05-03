module.exports = function findItemsOver(objList, threshold){
 var results = [];
 for(var prop in objList){
   if(objList[prop].qty > threshold){

     results.push(objList[prop]);
   }

 }
 return results;
}
