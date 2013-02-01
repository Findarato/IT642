//Lets define some variables
var crypt = "";
var plainText = "";
var alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var newCipher = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var calculated = 0;
var basic = document.getElementById("basicCipher");
var basicTable;

basicTable = displayAlphaTable(alpha);

function reset(){
	basicTable = displayAlphaTable(alpha);
	textBx.value="";
	subTxt.value="";
	plainTxt.value="";
  document.getElementById("basicCipher").innerHTML = basicTable;
	document.getElementById("adjustedCipher").innerHTML = basicTable;
}

function getUnique(str){
  var newString = "";
  var len = str.length;
  var c = str[0];
  for ( var i = 1; i < len; ++i ) {
      if (newString.indexOf(c)==-1) {
      newString += c;
    }
    c = str[i];
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
//displayCalculated();
textBx = document.getElementById("encryptedText");
subTxt = document.getElementById("substitution");
resultTxt = document.getElementById("resultText");
textBx.onblur = function() {this.value = this.value.toUpperCase();};
subTxt.onblur = function() {
  txt = this.value;
  txt = txt.replace(/ /g,"");
  txt = getUnique(txt);
  txt = txt.toUpperCase();
  this.value = txt;
  for(a=0;a<txt.length;a++){
    alert(newCipher.indexOf(txt.charAt(a)));
    txt.charAt(a);

  }
};


plainTxt = document.getElementById("plainText");
function changeCypher(value){
 switch(value){
  case 1:
  break;
  case 2:
  break;
 }
}