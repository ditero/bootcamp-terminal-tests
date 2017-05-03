module.exports = function totalPhoneBill(myUsage){
  var listUsage = myUsage.split(", ");
  var costPerCall = 2.75;
  var costPerSms = 0.65;
  var myBill = 0;
  var countCalls = 0;
  var countSms = 0;

  for(var i=0; i<listUsage.length; i++){
    if(listUsage[i].startsWith('s')){
       countSms++;

    }
    else if(listUsage[i].startsWith('c')){
            countCalls++;

            }
  }
  myBill = (countCalls*costPerCall) + (countSms*costPerSms)
  //console.log("R"+myBill);

   return "R"+myBill.toFixed(2);
}
