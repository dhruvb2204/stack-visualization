const stack = [];
const maxSize = 8;

const valueInput = document.getElementById("valueInput");
const stackElement = document.getElementById("stack");
const sizeElement = document.getElementById("size");
const messageElement = document.getElementById("message");
const topPointer = document.getElementById("topPointer");
const emptyStatus = document.getElementById("emptyStatus");
const fullStatus = document.getElementById("fullStatus");
const autoStatus = document.getElementById("autoStatus");
const autoButton = document.getElementById("autoButton");
let autoTimer = null;

function isEmpty() {
    return stack.length === 0;
}

function isFull() {
    return stack.length === maxSize;
}

function showMessage(message) {
    messageElement.textContent = message;
}

function displayStack() {
    stackElement.innerHTML = "";

    for (let i = 0; i < stack.length; i++) {
        const item = document.createElement("div");
        item.className = "stack-item";
        item.textContent = stack[i];
        stackElement.appendChild(item);
    }

    sizeElement.textContent = stack.length;
    stackElement.classList.toggle("is-full", isFull());
    emptyStatus.textContent = "EMPTY: " + (isEmpty() ? "Yes" : "No");
    fullStatus.textContent = "FULL: " + (isFull() ? "Yes" : "No");
    emptyStatus.classList.toggle("active", isEmpty());
    fullStatus.classList.toggle("warning", isFull());
    topPointer.textContent = isEmpty() ? "TOP: Empty" : "TOP: " + stack[stack.length - 1];
    topPointer.style.top = isEmpty()
        ? "50%"
        : (100 - ((stack.length - 0.5) / maxSize) * 100) + "%";
}

function pushValue(value = valueInput.value.trim(), automatic = false) {
    if (!automatic && value === "") {
        showMessage("Please enter a value before pushing.");
        valueInput.focus();
        return false;
    }

    if (isFull()) {
        showMessage("Stack Overflow: the stack is full.");
        stopAutoRandom();
        return false;
    }

    stack.push(value);
    if (!automatic) {
        valueInput.value = "";
    }
    displayStack();
    showMessage(value + " was pushed onto the stack" + (automatic ? " automatically." : "."));
    if (!automatic) {
        valueInput.focus();
    }
    return true;
}

function popValue() {
    if (isEmpty()) {
        showMessage("Stack Underflow: the stack is empty.");
        return;
    }

    const removedValue = stack.pop();
    displayStack();
    showMessage(removedValue + " was removed from the stack.");
}

function peekValue() {
    if (isEmpty()) {
        showMessage("The stack is empty.");
        return;
    }

    showMessage("Top value: " + stack[stack.length - 1]);
}

function clearStack() {
    stopAutoRandom();
    stack.length = 0;
    displayStack();
    showMessage("The stack has been cleared.");
}

function randomValue() {
    return Math.floor(Math.random() * 900) + 100;
}

function stopAutoRandom() {
    if (autoTimer !== null) {
        clearInterval(autoTimer);
        autoTimer = null;
    }
    autoButton.textContent = "Start Auto Random";
    autoStatus.textContent = "AUTO: Off";
    autoStatus.classList.remove("active");
}

function toggleAutoRandom() {
    if (autoTimer !== null) {
        stopAutoRandom();
        showMessage("Automatic random mode stopped.");
        return;
    }

    if (isFull()) {
        showMessage("Automatic mode cannot start: the stack is full.");
        return;
    }

    autoButton.textContent = "Stop Auto Random";
    autoStatus.textContent = "AUTO: On";
    autoStatus.classList.add("active");
    pushValue(String(randomValue()), true);
    autoTimer = setInterval(function () {
        if (!pushValue(String(randomValue()), true)) {
            stopAutoRandom();
        }
    }, 1200);
}

document.getElementById("pushButton").addEventListener("click", function () {
    pushValue();
});
document.getElementById("popButton").addEventListener("click", popValue);
document.getElementById("peekButton").addEventListener("click", peekValue);
autoButton.addEventListener("click", toggleAutoRandom);
document.getElementById("clearButton").addEventListener("click", clearStack);

valueInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        pushValue();
    }
});

displayStack();
