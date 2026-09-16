// ฟังก์ชันเตือนทุกๆ 30 วินาที
setInterval(function() {
    alert("Please, use me...");
}, 30000);

const leftInput = document.getElementById("leftMember");
const rightInput = document.getElementById("rightMember");
const operatorSelect = document.getElementById("operator");
const submitBtn = document.getElementById("submitBtn");

function isPositiveInteger(value) {
    if (value.trim() === "") {
        return false;
    }

    const num = Number(value);

    return Number.isInteger(num) && num >= 0;
}

submitBtn.addEventListener("click", function() {
    const leftVal = leftInput.value.trim();
    const rightVal = rightInput.value.trim();
    const operator = operatorSelect.value;

    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    const num1 = Number(leftVal);
    const num2 = Number(rightVal);
    let result;

    // เช็คเคสหารหรือโมดูโลด้วยศูนย์
    if ((operator === "/" || operator === "%") && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // ดำเนินการคำนวณตาม Operator
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            return;
    }

    alert(result);
    console.log(result);
});