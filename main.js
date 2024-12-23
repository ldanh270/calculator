const storage = document.querySelector("#storage")
const operator = document.querySelector("#operator")
const current = document.querySelector("#current")

const clearAllBtn = document.querySelector("#C")
const clearEntryBtn = document.querySelector("#CE")
const percentBtn = document.querySelector("#percent")

const calcBtns = document.querySelectorAll(".calc-btn")

const calculateBtn = document.querySelector("#equal")
const addBtn = document.querySelector("#add")
const minusBtn = document.querySelector("#minus")
const multipleBtn = document.querySelector("#multiple")
const divideBtn = document.querySelector("#divide")

const inputBtns = document.querySelectorAll(".num-btn")

const deleteBtn = document.querySelector("#delete")

const currentResult = () => {}

const addToStorage = (currentResult) => {}

const showCurrentOperator = (operator) => {}

const clearCurrent = () => {}

const main = () => {
  inputBtns.forEach((inputBtn) => {
    inputBtn.addEventListener("click", () => {
      current.value += inputBtn.value
      console.log(typeof current.value)
    })
  })
  calcBtns.forEach((operator) => {
    operator.addEventListener("click", () => {
      addToStorage(currentResult)
      showCurrentOperator(operator.innerText)
      clearCurrent()
    })
  })
}

main()
