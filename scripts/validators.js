// This are the patterns used to checl the form inputs 

const descriptionPattern = /^(?! ).*(?<! )$/;

const amountPattern = /^[0-9]+([.][0-9]{1,2})?$/;

const datePattern = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

const categoryPattern = /^[A-Za-z]+([ -][A-Za-z]+)*$/;

// this line checks repeated words like "lunch Lunch"

const duplicateWordPattern = /\b(\w+)\s+\1\b/i;

function validateDescription(value) {
    if (!descriptionPattern.test(value)) {
        return "Description cannot start or end with a space.";
    }

    if (duplicateWordPattern.test(value)) {
        return "Description has a repeated word.";
    }

    return "";
}

function validateAmount(value) {
    if (!amountPattern.test(value)) {
        return "Enter a valid amount";
    }

    return "";
}

function validateDate(value) {
    if (!datePattern.test(value)) {
        return "Enter a valid date.";
    }

    return "";
}

function validateCategory(value) {
    if (!categoryPattern.test(value)) {
        return "Choose a valid category.";
    }

    return "";
}