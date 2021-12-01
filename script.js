const { Observable, from } = rxjs;
const { Subject } = rxjs;

let darkMode = false
const _darkMode = new Subject();

const btnOn = document.getElementById('dark-mode-on')
const btnOff = document.getElementById('dark-mode-off')
const darkModeDiv = document.getElementById('dark-mode')
const darkModeObservableDiv = document.getElementById('dark-mode-observable')

btnOn.addEventListener('click', () => {
  darkMode = true
  _darkMode.next(true)
})
btnOff.addEventListener('click', () => {
  darkMode = false
  _darkMode.next(false)
})

setInterval(() => {
  if(darkMode) {
    darkModeDiv.innerHTML = 'update CSS and what not to darkMode'
  } else {
    darkModeDiv.innerHTML = 'light mode'
  }
}, 1000);

_darkMode.subscribe(newValue => {
  if(newValue) {
    darkModeObservableDiv.innerHTML = 'update CSS and what not to darkMode'
  } else {
    darkModeObservableDiv.innerHTML = 'light mode'
  }
});
