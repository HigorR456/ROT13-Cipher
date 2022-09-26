// Variables

function rot13(str) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ.!?1234567891.!?';
  let str2 = [];
  let n = 0;
  while (n < str.length) {
    let indx = alphabet.indexOf(str[n]);
    if (indx < 0) {
      str2 = str2 + ' ';
      n++;
    } else {
      let indx2 = alphabet[indx+13];
      str2 = str2 + indx2;
      n++;
    }
  }
  return str2;
}

let translate = document.querySelector('#translate');
let translated = document.querySelector(".translated");

translate.addEventListener('click', function() {
  
  let input2 = document.getElementById('ROT13text').value;
  let input = "'"+input2+"'";
  let translates = rot13(input.toUpperCase());
  
  translated.innerText = translates;

});



