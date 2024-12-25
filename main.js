const storageDisplay = document.querySelector("#storage")
const operatorDisplay = document.querySelector("#operator")
const currentDisplay = document.querySelector("#current")

const clearAllBtn = document.querySelector("#C")
const clearEntryBtn = document.querySelector("#CE")
const deleteBtn = document.querySelector("#delete")
const dotBtn = document.querySelector("#dot")
const percentBtn = document.querySelector("#percent")

const operatorBtns = document.querySelectorAll(".calc-btn")

const equalBtn = document.querySelector("#equal")
const addBtn = document.querySelector("#add")
const minusBtn = document.querySelector("#minus")
const multipleBtn = document.querySelector("#multiple")
const divideBtn = document.querySelector("#divide")

const inputBtns = document.querySelectorAll(".num-btn")

let previousOperator = ""
let newNumberStatus = false

// calculate result processing

const calculateResult = (currentValue, storageValue, operator) => {
  let current = 0
  if (currentValue.includes("%")) current = parseFloat(parseFloat(currentValue) / 100)
  else current = parseFloat(currentValue)
  const storage = parseFloat(storageValue)

  if (storageValue === "") return current
  if (currentValue === "") return storage

  let result = 0
  switch (operator) {
    case "+":
      result = storage + current
      break
    case "-":
      result = storage - current
      break
    case "*":
      result = storage * current
      break
    case "÷":
      result = storage / current
      break
  }
  return result
}

// input value processing

const inputValue = (inputBtn) => {
  if (newNumberStatus === false) {
    currentDisplay.value += inputBtn.value
  } else {
    currentDisplay.value = inputBtn.value
  }
  newNumberStatus = false
}

// number buttons events

inputBtns.forEach((inputBtn) => {
  inputBtn.addEventListener("click", () => {
    inputValue(inputBtn)
  })
})

// percent button events

percentBtn.addEventListener("click", () => {
  const percentResult = currentDisplay.value / 100
  currentDisplay.value += "%"
})

// dot button events

dotBtn.addEventListener("click", () => {
  if (currentDisplay.value.includes(".")) return
  else inputValue(dotBtn)
})

// equal button events

equalBtn.addEventListener("click", () => {
  currentDisplay.value = calculateResult(currentDisplay.value, storageDisplay.value, previousOperator)
  storageDisplay.value = ""

  operatorDisplay.value = ""
  previousOperator = operator.innerText
  newNumberStatus = true
})

// operator buttons events

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", () => {
    storageDisplay.value = calculateResult(currentDisplay.value, storageDisplay.value, previousOperator)
    operatorDisplay.value = operator.innerText
    previousOperator = operator.innerText
    newNumberStatus = true
  })
})

// CE button events

clearAllBtn.addEventListener("click", () => {
  storageDisplay.value = ""
  currentDisplay.value = ""
  operatorDisplay.value = ""
})

// C button events

clearEntryBtn.addEventListener("click", () => {
  currentDisplay.value = ""
})

// delete button events

deleteBtn.addEventListener("click", () => {
  currentDisplay.value = currentDisplay.value.slice(0, -1)
})
