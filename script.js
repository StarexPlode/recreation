const form = document.querySelector('#myForm')
const button = document.querySelector('#sub')

form.addEventListener("input", function () {
    button.disabled = !form.checkValidity();
})
button.addEventListener("click", function () {
    button.textContent = "Submitting...";
    button.disabled = true;

    setTimeout(function () {
        button.textContent = "Submitted!";
    }, 2000)
})