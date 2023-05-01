/** VARIABLES */

// these words will be displayed as clickable buttons when the page loads
const initWords = [
  "poetry", "surprise", "floral", "princess", "hero", "superpower", "sour", "glamorous"
]
// selectedWords arr will be used to store words selected by the user when a button is clicked.
const selectedWords = []

// A variable for the DOM representing words in the initWords arr
const btnContainer = document.getElementById("buttons")
const btns = document.querySelectorAll(".btn")
const myWords = document.getElementById("word-container")

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


/** ------ EVENT LISTENERS --------- */
btns.forEach(btn => btn.addEventListener("click", selectBtn))
btns.forEach(btn => btn.addEventListener("click", newEventListener))




/** HELPER FUNCTIONS */

const addWordsToArr = (str) => {
  selectedWords.push(str)
  console.log(selectedWords)
} 




