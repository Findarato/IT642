function colmnEncrypt() {
  plaintext = inputText.value.replace(/ /g,"");  
  var key = 5;  
  var pad = " ";
  //while(inputText.length % key != 0) {plaintext += pad.charAt(0);} // lets make this easier on our selfs and add padding
  var colLength = plaintext.length / key;  // this should be 2 for cool beans
  var ciphertext = ""; 
  for(i=0; i < key; i++){
      for(j=0; j < colLength; j++){
        ciphertext += plaintext.charAt(j*key+i);
      }
  }
  resultTxt.value = ciphertext;
}

function colmnDecrypt(f) {
    ciphertext = document.getElementById("c").value.toLowerCase().replace(/[^a-z]/g, "");  
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
    keyword = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/g, ""); 
    klen = keyword.length;
    if(klen <= 1){ alert("keyword should be at least 2 characters long"); return; }
    if(ciphertext.length % klen != 0){ alert("ciphertext has not been padded, the result may be incorrect (incorrect keyword?)."); }
    // first we put the text into columns based on keyword length
    var cols = new Array(klen);
    var colLength = ciphertext.length / klen;
    for(i=0; i < klen; i++) cols[i] = ciphertext.substr(i*colLength,colLength);
    // now we rearrange the columns so that they are in their unscrambled state
    var newcols = new Array(klen);
    chars="abcdefghijklmnopqrstuvwxyz"; j=0;i=0;
    while(j<klen){
        t=keyword.indexOf(chars.charAt(i));        
        if(t >= 0){
            newcols[t] = cols[j++];
            arrkw = keyword.split(""); arrkw[t] = "_"; keyword = arrkw.join("");
        }else i++;         
    }    
    // now read off the columns row-wise
    plaintext = "";
    for(i=0; i < colLength; i++){
        for(j=0; j < klen; j++) plaintext += newcols[j].charAt(i);
    }            
    document.getElementById("p").value = plaintext;    
}
