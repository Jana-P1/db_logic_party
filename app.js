/** VARIABLES */

// these words will be displayed as clickable buttons when the page loads
const initWords = [
  "poetry", "surprise", "floral", "princess", "hero", "superpower", "sour", "glamorous"
]
// selectedWords arr will be used to store words selected by the user when a button is clicked.
const selectedWords = []

// A variable for the DOM representing words in the initWords arr
const btnContainer = document.getElementById("buttons")
const btns = document.querySelectorAll(".words")
const myWords = document.getElementById("container2")
const result = document.getElementById("result")
const submit = document.getElementById("submit")

/** ----- EVENT HANDLER FUNCTIONS ------ */
const selectBtn = (e) => {
  e.preventDefault()
  console.log("I'm clicking here")
  removeInitialButton(e)
}

const removeInitialButton = (e) => {
  e.target.remove()
}

const newEventListener = (e) => {
  console.log("Sanity Check")
  const value = e.target.id
  let newBtn = document.createElement("button")
  newBtn.textContent = value
  newBtn.setAttribute("class", "btn btn-primary btn-lg")
  newBtn.setAttribute("id", value)
  myWords.appendChild(newBtn)
  addWordsToArr(value)
}

const submitWords = (e) => {
  e.preventDefault()
  console.log("selectedWords: ", "sanity check")

}


/** ------ EVENT LISTENERS --------- */
btns.forEach(btn => btn.addEventListener("click", selectBtn))
btns.forEach(btn => btn.addEventListener("click", newEventListener))
submit.addEventListener("click", submitWords)




/** HELPER FUNCTIONS */

const addWordsToArr = (str) => {
  selectedWords.push(str)
  console.log(selectedWords)
} 






