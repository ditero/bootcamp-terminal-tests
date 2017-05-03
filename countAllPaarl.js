module.exports = function countAllPaarl(regNum){

  var myReg = regNum.split(', ');
  //var allPaarl = [];
  var count = 0;
  for(var i = 0; i < myReg.length; i++){


    if(myReg[i].startsWith('CJ')){

      count++;
    }
  }
  //console.log(count);
  return count;
}
