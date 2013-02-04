/**
 * 
 * @author Joseph Harry
 */

function plusOne(a){
  var poped = a.pop();
  a.unshift(poped);
  return a;  
}
function minusOne(a){
  var shifted = a.shift();
  a.push(shifted);
  return a;  
}

function displayNewCipherTable(newCipher){
  adjustedTable = displayAlphaTable(newCipher);
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
}


function displayCalculated(){
   document.getElementById("calculated").innerHTML = calculated;
}

function runCipher(adjustedAlpha,inputText){
  newValue="";
  inputText = inputText.replace(/[^A-Za-z]/g, ' ');// lets clean up the text so it is just letters
  for (var i=0;i<inputText.length;i++){
    if(inputText.charAt(i)==" "){
      newValue +=" ";
    }else{
      cryptIndex = adjustedAlpha.indexOf(inputText.charAt(i));
      newValue +=alpha[cryptIndex];      
    }
  }
  return newValue;
}


subTxt.onblur = function() {
  if(ciperType.value=="2"){ // lets make sure we are only running this when we need to
    txt = this.value;
    txt = txt.replace(/ /g,"");
    txt = getUnique(txt);
    txt = txt.toUpperCase();
    this.value = txt;
    var letter = "";
    
  }
  displayNewCipherTable(newCipher);
};


document.getElementById("reverse").onclick=function(){
  newCipher = newCipher.reverse();
  displayNewCipherTable(newCipher);
  var newString = runCipher(newCipher,document.getElementById("inputText").value);
  resultTxt.value = formatOutput(newString);
};
document.getElementById("plusOne").onclick=function(){
  newCipher = plusOne(newCipher);
  displayNewCipherTable(newCipher);
  calculated++;
  displayCalculated();
  var newString = runCipher(newCipher,document.getElementById("inputText").value);
  resultTxt.value = formatOutput(newString);
};
document.getElementById("minusOne").onclick=function(){
  newCipher = minusOne(newCipher);
  displayNewCipherTable(newCipher);
  calculated--;
  displayCalculated();
  var newString = runCipher(newCipher,document.getElementById("inputText").value);
  resultTxt.value = formatOutput(newString);
};
