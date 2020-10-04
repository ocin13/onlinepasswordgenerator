//const { get } = require("jquery");

//slider button
let slider = document.getElementById("myRange");
let valueSlc = document.getElementById("selectValue");
valueSlc.innerHTML = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  valueSlc.innerHTML = this.value;
}
//get the name && pin value
let name = document.getElementById("name");
let pin = document.getElementById("pin");
let generateBtn = document.getElementById("generate");
let defautPssd = document.getElementById("defaultPssd");
let accounts = document.querySelectorAll(".accountPssd");
let accountsName = document.querySelectorAll(".account");
let addedAcc = document.getElementById("added");
let addBtn = document.getElementById("addAccount");
let newAccountName = document.getElementById("nameAcc");
//events
generateBtn.addEventListener("click", generatePassword);
addBtn.addEventListener("click", addAccount);
//encrypt the letters
function encryptWord(word){
  let n = word.length;
  let suffix = word.slice(n/2);
  let newWord = word + suffix;
  let changedWord =   newWord.replace(/a/gi,"z");
  let changedWord01 = changedWord.replace(/b/gi,"y");
  let changedWord02 = changedWord01.replace(/c/gi,"x");
  let changedWord03 = changedWord02.replace(/d/gi,"w");
  let changedWord04 = changedWord03.replace(/e/gi,"v");
  let changedWord05 = changedWord04.replace(/f/gi,"u");
  let changedWord06 = changedWord05.replace(/g/gi,"t");
  let changedWord07 = changedWord06.replace(/h/gi,"s");
  let changedWord08 = changedWord07.replace(/i/gi,"r");
  let changedWord09 = changedWord08.replace(/j/gi,"q");
  let changedWord10 = changedWord09.replace(/k/gi,"p");
  let changedWord11 = changedWord10.replace(/l/gi,"o");
  let changedWord12 = changedWord11.replace(/m/gi,"n");
  let changedWord13 = changedWord12.replace(/n/gi,"m1n");
  let changedWord14 = changedWord13.replace(/o/gi,"l2o");
  let changedWord15 = changedWord14.replace(/p/gi,"k3p");
  let changedWord16 = changedWord15.replace(/q/gi,"j4q");
  let changedWord17 = changedWord16.replace(/r/gi,"i5r");
  let changedWord18 = changedWord17.replace(/s/gi,"h6s");
  let changedWord19 = changedWord18.replace(/t/gi,"g7t");
  let changedWord20 = changedWord19.replace(/u/gi,"f8u");
  let changedWord21 = changedWord20.replace(/v/gi,"e9v");
  let changedWord22 = changedWord21.replace(/w/gi,"d10w");
  let changedWord23 = changedWord22.replace(/x/gi,"c11c");
  let changedWord24 = changedWord23.replace(/z/gi,"a12z");
  return changedWord23;
    
  }
  function encryptPin(pin){
    let newPin = Math.floor(pin/100);
    return newPin;
  }


//generate random symbol
function getSymbol(){
  let symbols = ["/", "#", "@","*","-","%","!","&","$","+"];
  let i = Math.floor(Math.random()*10);
  return symbols[i];
}
//accounts symbol
function symbolAcc(pin){
  let symbols = ["/", "#", "@","*","-","%","!","&","$","+"];
  let n = Math.floor(pin/1000);
  return symbols[n];
  
}
//add account function
function addAccount(){
  var elmnt = document.getElementById("accountExp");
  var cln = elmnt.cloneNode(true);
  addedAcc.appendChild(cln);
  let n = accounts.length;
  let nameStr = encryptWord(newAccountName.value);
  let finalNameNew = nameStr.slice(0,slider.value-4);
  document.querySelectorAll(".account")[n].innerHTML = newAccountName.value + ":";
  document.querySelectorAll(".accountPssd")[n].innerHTML = finalNameNew + symbolAcc(pin.value) + newAccountName.value.slice(0,2) + symbolAcc(pin.value);
  document.getElementById("add").style.display = "none";
}
//function for basic pssd
function generatePassword() {
  let symbolFirst = getSymbol();
  let symbolSecond = getSymbol();
  let nameStr = encryptWord(name.value);
  let finalName = nameStr.slice(0,slider.value-4);
  let pinStr = encryptPin(pin.value);
  defautPssd.innerHTML = finalName + symbolFirst + pinStr  + symbolSecond ;
  
  for (var i = 0; i < accounts.length; i++) {
    accounts[i].innerHTML = finalName + symbolAcc(pin.value) + accountsName[i].innerHTML.slice(0,2);
}

}
//copy function
function copy() {

  /* Get the text field */
  var copyText = document.getElementById("instagram");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

