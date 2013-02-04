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
var inputText = document.getElementById("inputText");
var subTxt = document.getElementById("substitution");
var resultTxt = document.getElementById("resultText");
var ciperType = document.getElementById("cipherType");
var encryptRdo = document.getElementsByName("encrypt");
var cesarData = [];
var keySubData = [];
var colmnarData = [];
var vermanData = []


basicTable = displayAlphaTable(alpha);

function drawGraph(data){
  RGraph.Clear(document.getElementById("cvs"));
  RGraph.ObjectRegistry.Clear();

  var line = new RGraph.Line('cvs', data);
  line.Set('chart.colors', ['green']);
  line.Set('chart.linewidth', 1);
  line.Set('chart.filled', true);
  line.Set('chart.fillstyle', 'rgba(128,255,128,0.5)');
  line.Set('chart.numxticks', 5);
  line.Draw();
}
function swap(){
  var holder = $("#inputText").val();
  $("#inputText").val($("#resultText").val());
  $("#resultText").val(holder);
  
}

function reset(){
	basicTable = displayAlphaTable(alpha);
	inputText.value="";
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
inputText.onblur = function() {this.value = this.value.toUpperCase();};

plainTxt = document.getElementById("plainText");
function changeCipher(value){
  switch(value){
    case "1"://cesar
      $("#substitution").css({"display":"none"});
      $("#reverse").css({"display":"inline-block"});
      $("#plusOne").css({"display":"inline-block"});
      $("#minusOne").css({"display":"inline-block"});
    break;
    case "2"://key sub
      $("#substitution").css({"display":"inline-block"});
      $("#reverse").css({"display":"inline-block"});
      $("#plusOne").css({"display":"inline-block"});
      $("#minusOne").css({"display":"inline-block"});
    break;
    case "3"://vernam
      $("#substitution").css({"display":"none"});
      $("#reverse").css({"display":"none"});
      $("#plusOne").css({"display":"none"});
      $("#minusOne").css({"display":"none"});
    break;
    case "4": //columnar sub
      $("#reverse").css({"display":"none"});
      $("#plusOne").css({"display":"none"});
      $("#minusOne").css({"display":"none"});
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
    case "3":
    break;
    case "4":

      if(radioValue(encryptRdo) == 0){
        colmnEncrypt();
      }else{
        colmnDecrypt();
      }
      
    break;
    default:
      subTxt.style.cssText="display:none";
    break;
  }

}
