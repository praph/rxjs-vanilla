const { Observable, from } = rxjs;
let darkMode = false

const btnOn = document.getElementById('dark-mode-on')
const btnOff = document.getElementById('dark-mode-off')
const darkModeDiv = document.getElementById('dark-mode')

btnOn.addEventListener('click', () => {
  darkMode = true
})
btnOff.addEventListener('click', () => {
  darkMode = false
})

darkModeDiv.innerHTML = darkMode