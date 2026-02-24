const button = document.querySelector('#sub') 

button.addEventListener("click", function () {
    button.textContent = "Submitting...";
    
    setTimeout(function () {
        button.textContent = "Submitted!";
        button.disabled = true;
        console.dir(button)
    }, 2000)
})