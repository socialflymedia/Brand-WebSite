export const rules = () => {
    return [
        {
            regex: /^[A-Za-z]+([ '-][A-Za-z]+)*$/,
            errorMessage: "Please enter a valid name",
        },
        {
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            errorMessage: "Please enter a valid email address",
        },
        {
            regex: /^(?:\b\w+\b[\s]*){1,250}$/,
            errorMessage: "Please enter a valid message",
        },
    ];
};
