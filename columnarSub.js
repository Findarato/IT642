function colmnEncrypt() {
  var start = new Date().getTime();
  plaintext = inputText.value.replace(/ /g,"");  
  var key = 5;  
  var pad = " ";
  while(plaintext.length % key != 0) {plaintext += "X";} // lets make this easier on our selfs and add padding
  var colLength = plaintext.length / key;  // this should be 2 for cool beans
  var ciphertext = ""; 
  for(i=0; i < key; i++){
      for(j=0; j < colLength; j++){
        ciphertext += plaintext.charAt(j*key+i);
      }
  }
  resultTxt.value = ciphertext;
  var endTime = new Date().getTime();
  var duration = endTime-start;
  colmnarData.push(duration);
  drawGraph(colmnarData);
}
function colmnDecrypt(f) {
  var ciphertext = inputText.value.replace(/ /g,"");
  var key = 5; 
  if(ciphertext.length % key != 0){ alert("ciphertext has not been padded, the result may be incorrect."+ciphertext.length % key); }
  // first we put the text into columns based on keyword length
  var cols = new Array(key);
  var newcols = new Array(key);
  var colLength = ciphertext.length / key;
  for(i=0; i < key; i++) {
    cols[i] = ciphertext.substr(i*colLength,colLength);
  }
  
  // now we rearrange the columns so that they are in their unscrambled state
   
  j=0;i=0;
  for(var d=0;j<key;d++){
    newcols[d] = cols[j++];    
  }
  // now read off the columns row-wise
  plaintext = "";
  for(i=0; i < colLength; i++){
      for(j=0; j < key; j++) plaintext += newcols[j].charAt(i);
  }            

  resultTxt.value = formatOutput(plaintext); 
  var endTime = new Date().getTime();
  var duration = endTime-start;
  colmnarData.push(duration);
  drawGraph(colmnarData);       
}
