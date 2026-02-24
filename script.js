const form = document.querySelector("#myForm")
const button = document.querySelector ("#sub")

let state = "idle";

function renderButton() {
    if (state === "idle") {
        button.textContent = "Submit";
        button.disabled = !form.checkValidity();
    }
    if (state === "submitting") {
        button.textContent = "Submitting...";
        button.disabled = true;
    }
    if (state === "submitted") {
        button.textContent = "Submitted!";
        button.disabled = true;
    }
}

form.addEventListener("input", function () {
    renderButton();
})

button.addEventListener("click", function () {
    
    state = "submitting";
    renderButton();

    setTimeout(function () {
        state = "submitted";
        renderButton();

        setTimeout(function () {
            state = "idle";
            renderButton();
        }, 2000)
    }, 2000)
})

const theme = document.querySelector("#theme");
const body = document.querySelector("#bady");

function themeToggle() {
    body.style.backgroundColor = "#888"
    console.dir(body);
}
function themeToggle2 () {
    body.classList.toggle("dark");
}
theme.addEventListener("click", function() {
    themeToggle2()
})