# JavaScript Hoisting Bug
This repository demonstrates a common JavaScript bug related to variable hoisting.  The code in `bug.js` shows how accessing a variable before its declaration results in `undefined` being logged to the console. This is unexpected behavior for many developers, as they might assume a `ReferenceError` would be thrown. The solution in `bugSolution.js` demonstrates how to avoid this issue.

## How to reproduce

1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., Node.js, browser console).
3. Observe the output in the console.