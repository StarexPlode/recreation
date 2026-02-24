const form = document.querySelector("#myForm")
const button = document.querySelector("#sub")

let state = "idle";

function RenderButton() {
    if (state === "idle") {
        button.textContent = "Submit";
        button.disabled = !form.checkValidity();
    }
    if (state === "submitting") {
        button.textContent = "Submitting...";
        button.disabled = true;
    }
    if (state === "submitted") {
        button.textContent = "Submitted!"
        button.disabled = true;
    }
}
form.addEventListener("input", function () {
    if (state === "idle")
    RenderButton();
})

button.addEventListener("click", function () {
    if (state !== "idle") return;

    state = "submitting";
    RenderButton();

    setTimeout(function() {
        state = "submitted";
        RenderButton();

        setTimeout(function() {
            state = "idle";
            RenderButton();
        }, 3000)
    }, 2000)
})