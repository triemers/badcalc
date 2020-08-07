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