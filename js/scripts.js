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


  // var userInput = function(sentence){
  //   return sentence.chartAt(str.length
  //
  //
  // });
});
