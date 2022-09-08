let h1TagSize = document.querySelector("#size-h1");
let h2TagSize = document.querySelector("#size-h2");
let h3TagSize = document.querySelector("#size-h3");

let outputText =document.querySelector("#heading");

h1TagSize.addEventListener("click", () => {

    var h1El = '<h1>' + outputText.innerHTML + '</h1>';
    
    outputText.innerHTML = h1El;

})

h2TagSize.addEventListener("click", () => {

    var h2El = '<h2>' + outputText.innerHTML + '</h2>';

    outputText.innerHTML = h2El;


})

h3TagSize.addEventListener("click", () => {

    var h3El = '<h3>' + outputText.innerHTML + '</h3>';

    outputText.innerHTML = h3El;

})

