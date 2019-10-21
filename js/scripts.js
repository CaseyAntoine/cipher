$(document).ready(function() {

  var sentence = prompt("Enter a sentence!");
  var stringLength = sentence.length;
  var firstChar = sentence.charAt(0);
  var lastChar = sentence.charAt(stringLength - 1);

  console.log(stringLength);
  console.log(firstChar);
  console.log(lastChar);

  var capital = function(sentence){
    console.log(firstChar.toUpperCase() + lastChar.toUpperCase());
  };

  capital();

  var reverse = function(capital){
    console.log(sentence + lastChar.toUpperCase() + firstChar.toUpperCase());
  };

  reverse();

var wack = sentence.length / 2;

console.log(wack);

var wackyChar = sentence.charAt(wack);

console.log(wackyChar);

var wacky = function(){
  console.log(wackyChar + reverse);
};

var backward = function(){
  console.log(sentence.split("").reverse().join(""));
};

backward();


  // var userInput = function(sentence){
  //   return sentence.chartAt(str.length
  //
  //
  // });
});
