//Lets define some variables
var crypt = "";
var plainText = "";
function newAlpha(){
  return ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
}
var alpha = newAlpha();
var newCipher = newAlpha();
var calculated = 0;
var basic = document.getElementById("basicCipher");
var basicTable;
var textBx = document.getElementById("inputText");
var subTxt = document.getElementById("substitution");
var resultTxt = document.getElementById("resultText");
var ciperType = document.getElementById("cipherType");
var encryptRdo = document.getElementsByName("encrypt");



basicTable = displayAlphaTable(alpha);

function reset(){
	basicTable = displayAlphaTable(alpha);
	textBx.value="";
	subTxt.value="";
	plainTxt.value="";
  document.getElementById("basicCipher").innerHTML = basicTable;
	document.getElementById("adjustedCipher").innerHTML = basicTable;
}
function radioValue(radios){
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        return radios[i].value;
    }
  }
}
function SelectAll(id){
  document.getElementById(id).focus();
  document.getElementById(id).select();
}
function getUnique(str){
  var newString = "";
  var len = str.length;
  str.toUpperCase();
  var c = str[0];
  for ( var i = 0; i < len; ++i ) {
    c = str[i];
    if (newString.indexOf(c)==-1) {
      newString += c;
    }
  }
  return newString;
}

function displayAlphaTable(alphaResult){
  var table = "<table cellspacing='0' cellpadding='1px' style='border:1px black solid'><tr>";
    for (var i=0;i<26;i++){ 
      table +="<td>"+alphaResult[i]+"</td>";
    }
    table +="</tr></table><br>";
    return table;
}

function formatOutput(output){
  output = output.replace(/ /g,"");  
  var newOutput = "";
  for (var i=0;i<output.length;i++){
    if(i%5==0 && i>0){
      newOutput += " "+output.charAt(i);
    }else{
      newOutput += output.charAt(i); 
    }
  }
  return newOutput;
}
document.getElementById("basicCipher").innerHTML = basicTable;
document.getElementById("adjustedCipher").innerHTML = basicTable;
//create some global variables
textBx.onblur = function() {this.value = this.value.toUpperCase();};

plainTxt = document.getElementById("plainText");
function changeCipher(value){
  switch(value){
    case "1":
      subTxt.style.cssText="display:none";
    break;
    case "2":
      subTxt.style.cssText="display:inline-block";
    break;
    default:
      subTxt.style.cssText="display:none";
    break;
  }
}
function exec(){
  
  switch(ciperType.value){
    case "1": // Ceasar
    case "2": // key sub
      var newString = runCipher(newCipher,document.getElementById("inputText").value);
      resultTxt.value = formatOutput(newString);
    break;
    default:
      subTxt.style.cssText="display:none";
    break;
  }

}
