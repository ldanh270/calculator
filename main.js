const storageDisplay = document.querySelector("#storage")
const operatorDisplay = document.querySelector("#operator")
const currentDisplay = document.querySelector("#current")

const clearAllBtn = document.querySelector("#C")
const clearEntryBtn = document.querySelector("#CE")
const percentBtn = document.querySelector("#percent")

const operatorBtns = document.querySelectorAll(".calc-btn")

const calculateBtn = document.querySelector("#equal")
const addBtn = document.querySelector("#add")
const minusBtn = document.querySelector("#minus")
const multipleBtn = document.querySelector("#multiple")
const divideBtn = document.querySelector("#divide")

const inputBtns = document.querySelectorAll(".num-btn")

const deleteBtn = document.querySelector("#delete")

let tempValue = ""
let previousOperator = ""

const calculateResult = (currentValue, storageValue, operator) => {
  if (storageValue === "") return currentValue
  if (currentValue === "") return currentValue

  const current = Number(currentValue)
  const storage = Number(storageValue)
  console.log(storage, current, operator)
  let result = NaN
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

calculateBtn.addEventListener("click", () => {
  storageDisplay.value = calculateResult(currentDisplay.value)
})

inputBtns.forEach((inputBtn) => {
  inputBtn.addEventListener("click", () => {
    currentDisplay.value += inputBtn.value
    tempValue += inputBtn.value
  })
})

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", () => {
    storageDisplay.value = calculateResult(currentDisplay.value, storageDisplay.value, previousOperator)
    currentDisplay.value = ""
    operatorDisplay.value = operator.innerText
    previousOperator = operator.innerText
  })
})

clearAllBtn.addEventListener("click", () => {
  storageDisplay.value = ""
  currentDisplay.value = ""
  operatorDisplay.value = ""
})

clearEntryBtn.addEventListener("click", () => {
  currentDisplay.value = ""
})
