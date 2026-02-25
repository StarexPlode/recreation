const form = document.querySelector("#myForm")
const button = document.querySelector("#sub")

let state = "idle";

function buttonRender() {
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
form.addEventListener("input", () => {
    buttonRender()
})

button.addEventListener("click", () => {
    
    state = "submitting";
    buttonRender();

    setTimeout(() => {
        state = "submitted"
        buttonRender();

        setTimeout(() => {
            state = "idle";
            buttonRender();
        }, 2000)
    }, 3000)
})