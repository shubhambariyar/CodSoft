let result = "0";

function updateResult() {
    document.getElementById("result").innerText = result;
}

function appendToResult(value) {
    if (result === "0" && value !== "." && value !== "C") {
        result = value;
    } else {
        result += value;
    }
    updateResult();
}

function clearResult() {
    result = "0";
    updateResult();
}

function calculateResult() {
    try {
        result = eval(result).toString();
        updateResult();
    } catch (error) {
        result = "Error";
        updateResult();
    }
}

updateResult();
