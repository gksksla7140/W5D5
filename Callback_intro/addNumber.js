const readline = require('readline');


const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

function addNumbers(sum, numsleft, completetionCallback) {
    if (numsleft === 0 ){
     completetionCallback(sum);
  } else {
    reader.question("Enter a Number", function(number){
      const num = parseInt(number);
      const new_sum = num + sum;
      console.log(`partial sum is :${new_sum}`);
      addNumbers(new_sum, numsleft-1,completetionCallback );
    });}
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
