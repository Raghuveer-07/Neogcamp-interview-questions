let showLoading = document.querySelector("#loading-show");
let doneLoading = document.querySelector("#loading-done");

let loadingText =document.querySelector("#loading-text");

showLoading.addEventListener("click", () => {

    loadingText.innerText = "loading......"
    loadingText.style.display = "block";

})

doneLoading.addEventListener("click", () => {

    loadingText.style.display = "none";

})
