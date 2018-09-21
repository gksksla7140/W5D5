const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {

  reader.question(`${el1} is greater than ${el2}?`, function (answer) {
    if (answer === 'y') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }
    askIfGreaterThan(arr[i], arr[i+1], function(response) {
      if (response) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i+1] = tmp;
        madeAnySwaps = true;
      }
    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });

}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  // madeAnySwaps = true;
  // outerBubbleSortLoop()
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  if (madeAnySwaps) {
      // madeAnySwaps = false;
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
  } else {
    sortCompletionCallback(arr);
   }
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});


// function askIfGreaterThan(el1, el2, callback) {
