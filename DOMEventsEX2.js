//Exercise 2 DOM Events
var currentText = document.getElementsByTagName("textarea")[0];
var newText = "";

console.log(newText.length);

currentText.addEventListener("input", function() {
    var input = currentText.value;
    var replacer = "";

    for (var i = 0; i < input.length; i++) {
        replacer += newText[i];
    }

    currentText.value = replacer;
});
