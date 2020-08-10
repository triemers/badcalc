const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

// Looks cleaner, does the same thing as before
const operators = ['add', 'subtract', 'multiply', 'divide']

const handleClick = (e) => {
  //determine type of key
  const key = e.target
  const action = key.dataset.action
  if (!action) {
    console.log('number key!')
  } else if (operators.includes(action)) {
    console.log('operator key!')
  } else if (action === 'decimal') {
    console.log('decimal key!')
  } else if (action === 'clear') {
    console.log('clear key!')
  } else if (action === 'calculate') {
    console.log('equal key')
  } else {
  	console.log('wtf')
  }
};

//event listener
keys.addEventListener('click', handleClick);

const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent //can add mathfloor here?
      };
    };
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    };
    if (action=== 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide') {
          key.classList.add('is-depressed')
          calculator.dataset.previousKeyType = 'operator';
    };
    const previousKeyType = calculator.dataset.previousKeyType
if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
if (action === 'calculate') {
  const secondValue = displayedNum
  // ...
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  // ...
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}
  }

})

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    // ...
    
    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})
