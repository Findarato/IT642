/**
 * 
 * @author Joseph Harry
 */
var crypt = "";
var plainText = "";
var alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var newCipher = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var calculated = 0;
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
function reverse(a){
 return a.reverse();
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
var basic = document.getElementById("basicCipher");
var basicTable = "<table border='1'><tr>";
for (var i=0;i<26;i++){ 
  basicTable += "<td>"+alpha[i]+"</td>";
}
basicTable +="</tr></table><br>";
document.getElementById("basicCipher").innerHTML = basicTable;
document.getElementById("adjustedCipher").innerHTML = basicTable;
displayCalculated();
document.getElementById("reverse").onclick=function(){
  var adjustedTable = "<table border='1'><tr>";
  newCipher = reverse(newCipher);
  for (var i=0;i<26;i++){ 
    adjustedTable +="<td>"+newCipher[i]+"</td>";
  }
  adjustedTable +="</tr></table>";  
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  var newString = adjustCipher(newCipher,document.getElementById("cypherText").value);
  document.getElementById("plainText").value = newString;
};
document.getElementById("plusOne").onclick=function(){
  var adjustedTable = "<table border='1'><tr>";
  newCipher = plusOne(newCipher);
  for (var i=0;i<26;i++){ 
    adjustedTable +="<td>"+newCipher[i]+"</td>";
  }
  adjustedTable +="</tr></table>";  
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  calculated++;
  displayCalculated();
  var newString = adjustCipher(newCipher,document.getElementById("cypherText").value);
  document.getElementById("plainText").value = newString;
};
document.getElementById("minusOne").onclick=function(){
  var adjustedTable = "<table border='1'><tr>";
  newCipher = minusOne(newCipher);
  for (var i=0;i<26;i++){ 
    adjustedTable +="<td>"+newCipher[i]+"</td>";
  }
  adjustedTable +="</tr></table>";  
  document.getElementById("adjustedCipher").innerHTML = adjustedTable;
  calculated--;
  displayCalculated();
  var newString = adjustCipher(newCipher,document.getElementById("cypherText").value);
  document.getElementById("plainText").value = newString;
};

//document.getElementById("plainText").value = adjustCipher(newCipher,document.getElementById("cypherText").value);