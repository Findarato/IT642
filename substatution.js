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
function displayCalculated(){
   document.getElementById("calculated").innerHTML = calculated;
}
function adjustCipher(adjusted,encryptedText){
  newValue="";
  encryptedText = encryptedText.replace(/[^A-Za-z]/g, ' ');// lets clean up the text so it is just letters
  //alert(alpha.toString());
  for (var i=0;i<encryptedText.length;i++){
    if(encryptedText.charAt(i)==" "){
      newValue +=" ";
    }else{
      cryptIndex = adjusted.indexOf(encryptedText.charAt(i));
      //alert(cryptIndex+"=>"+alpha[cryptIndex]);
      newValue +=alpha[cryptIndex];      
    }
  }
  return newValue;
}
document.getElementById("reverse").onclick=function(){
  newCipher = newCipher.reverse();
  adjustedTable = displayAlphaTable(newCipher);
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  var newString = adjustCipher(newCipher,document.getElementById("encryptedText").value);
  plainTxt.value = formatOutput(newString);
};
document.getElementById("plusOne").onclick=function(){
  newCipher = plusOne(newCipher);
  adjustedTable = displayAlphaTable(newCipher);
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  calculated++;
  displayCalculated();
  var newString = adjustCipher(newCipher,document.getElementById("encryptedText").value);
  plainTxt.value = formatOutput(newString);
};
document.getElementById("minusOne").onclick=function(){
  newCipher = minusOne(newCipher);
  adjustedTable = displayAlphaTable(newCipher);
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  calculated--;
  displayCalculated();
  var newString = adjustCipher(newCipher,document.getElementById("encryptedText").value);
  plainTxt.value = formatOutput(newString);
};
//document.getElementById("plainText").value = adjustCipher(newCipher,document.getElementById("cypherText").value);