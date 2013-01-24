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
plainTxt = document.getElementById("plainText");
textBx.onblur = function() {this.value = this.value.toUpperCase();};
subTxt.onblur = function() {
  txt = this.value;
  txt = txt.toUpperCase();
  txt = txt.replace(/[^\w\s]|(.)(?=\1)/gi, "")
  txt = txt.replace(/ /g,"");
  this.value = txt;

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