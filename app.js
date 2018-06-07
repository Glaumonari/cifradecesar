var choice = 0;
var phrase = "";

while(choice == 0){
    choice = prompt("Escolha uma opção \n 1.Criptografar \n 2.Descriptografar");

    if (choice == "1") {
        while (!phrase) {
            phrase = prompt("Escreva uma palavra ou phrase que queira Criptografar");
            if(!phrase){
                alert("Ops, esqueceu de escrever !!!");
            }
        }
        alert(cipher(phrase,33));
        choice = 0;
        phrase = "";

    } else if (choice == "2") {
        while(!phrase){
            phrase = prompt("Escolha uma palavra ou phrase que queira Descriptografar");
            phrase = phrase.toUpperCase();
            if(!phrase){
                alert("Ops,esqueceu de escrever !!!");
            }
        }
        alert(decipher(phrase,33));
        choice =  0;
        phrase = "";
    } else {
        alert("Escolha 1 ou 2");
    }
}

function cipher(choice,spaceCode){
    var textCipher = "";
    var index = 0;
    for(var i = 0; i < choice.length; i++){
        index = choice.charCodeAt(i);
        if (index > 65 || index < 97) {
            if(choice.charAt(i) == choice.charAt(i).toUpperCase()){
                var textChar = (index - 65 + spaceCode) % 26 + 65;
                textCipher += String.fromCharCode(textChar);
            } else if(index > 97 ||index < 122 ){
                textChar = (index - 97 + spaceCode) % 26 + 97;
                textCipher += String.fromCharCode(textChar);
            }
        }
    }
    return textCipher;
}


function decipher(choice, spaceCode){
  var newText = "";
  var textChar1=0;
  var index=0;
    for(var i = 0; i<choice.length; i++){
    var index2=choice.charCodeAt(i);
      textChar1 = (choice.charCodeAt(i))-spaceCode%26;
      if(index2> 64){
        if(choice.charAt(i) == choice.charAt(i).toUpperCase()){
          textChar1 = (choice.charCodeAt(i) + 65 - spaceCode) % 26 + 65;
        }
          else{
            textChar1 = (choice.charCodeAt(i) + 85 - spaceCode) % 26 + 97;
          }

      }
      newText += String.fromCharCode(textChar1);
    }
    return newText;
}
