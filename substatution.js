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


function displayCalculated(){
   document.getElementById("calculated").innerHTML = calculated;
}

function substitutionCipher(subText){
  subText = getUnique(subtext);
  newValue = alpha.toString();
  newValue = subText.split();
  alert(newValue);
}

function runCipher(adjustedAlpha,encryptedText){
  newValue="";
  encryptedText = encryptedText.replace(/[^A-Za-z]/g, ' ');// lets clean up the text so it is just letters
  for (var i=0;i<encryptedText.length;i++){
    if(encryptedText.charAt(i)==" "){
      newValue +=" ";
    }else{
      cryptIndex = adjustedAlpha.indexOf(encryptedText.charAt(i));
      newValue +=alpha[cryptIndex];      
    }
  }
  return newValue;
}

document.getElementById("reverse").onclick=function(){
  newCipher = newCipher.reverse();
  adjustedTable = displayAlphaTable(newCipher);
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  var newString = runCipher(newCipher,document.getElementById("encryptedText").value);
  plainTxt.value = formatOutput(newString);
};

document.getElementById("plusOne").onclick=function(){
  newCipher = plusOne(newCipher);
  adjustedTable = displayAlphaTable(newCipher);
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  calculated++;
  displayCalculated();
  var newString = runCipher(newCipher,document.getElementById("encryptedText").value);
  plainTxt.value = formatOutput(newString);
};
document.getElementById("minusOne").onclick=function(){
  newCipher = minusOne(newCipher);
  adjustedTable = displayAlphaTable(newCipher);
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  calculated--;
  displayCalculated();
  var newString = runCipher(newCipher,document.getElementById("encryptedText").value);
  plainTxt.value = formatOutput(newString);
};
//document.getElementById("plainText").value = adjustCipher(newCipher,document.getElementById("cypherText").value);