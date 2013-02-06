function vernameEncrypt(plainText,random){
  var base = newAlpha();
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
      random[a] = Math.floor(Math.random()*100+1);
    }
    $("#vernamCode").val(random)
  }
  plainText = plainText.replace(/ /g,"").split("");
  
  for(a=0;a<plainText.length;a++){
    ptValue = base.indexOf(plainText[a]);
    randValue = random[a];
    encValue = (ptValue+randValue)%26;
    cipherValue += base[encValue];
  }
  resultTxt.value = formatOutput(cipherValue);  
  
}
