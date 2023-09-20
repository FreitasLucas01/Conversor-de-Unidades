const inputElement = document.querySelector("#input-number");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;
  const inputValue = inputElement.value;

  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.innerText = "";
    return;
  }

  let meters;
  switch (fromValue) {
    case "m":
      meters = inputValue;
      break;
    case "km":
      meters = inputValue * 1000;
      break;
    case "cm":
      meters = inputValue / 100;
      break;
    case "mm":
      meters = inputValue / 1000;
      break;
    case "miles":
      meters = inputValue * 1609;
      break;
  }

  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
    case "miles":
      result = meters / 1609;
      break;
  }

  outputElement.value = result;

  const fromLabel = fromElement.options[fromElement.selectedIndex].innerText;
  const toLabel = toElement.options[toElement.selectedIndex].innerText;

  const message = `${inputValue} ${fromLabel} equivalem a ${result} ${toLabel}`;
  messageElement.innerText = message;
  return;
}

convertButton.addEventListener("click", convert);
