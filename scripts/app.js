const form = document.querySelector("form");

const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const categoryInput = document.querySelector("#category");
const dateInput = document.querySelector("#date");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let error = validateDescription(descriptionInput.value);

    if (!error) {
        error = validateAmount(amountInput.value);
    }

    if (!error) {
        error = validateCategory(categoryInput.value);
    }

    if (!error) {
        error = validateDate(dateInput.value);
    }

    if (error) {
        alert(error);
        return;
    }

    alert("Expense Saved.");
});
