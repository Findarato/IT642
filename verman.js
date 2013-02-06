function vernameEncrypt(plainText,random){
  var cipherValue = "";
  if(!Array.isArray(random)){
    if(random.indexOf(" ")==-1){
      random = random.split(",");  
    }else{
      random = random.split(" ");
    }
  }
  if(random===undefined || random.length <= 0 || random.length<plainText.length){
    var random = new Array();
    for(a=0;a<plainText.length;a++){
      random[a] = Math.floor((Math.random()*50));
    }
    $("#vernamCode").val(random)
  }
  plainText = plainText.replace(/ /g,"").split("");
  for(a=0;a<plainText.length;a++){
    ptValue = String.charCodeAt(plainText[a]);//turns letters into numbers
    randValue = random[a];
    encValue = (ptValue^randValue);
    cipherValue += String.fromCharCode(encValue);
  }
  resultTxt.value = formatOutput(cipherValue);  
}