# CommonJs VS ES Modules

- Node.js supports commonJs module format by default. And the *load* using **`require()`**, and variables and function *export* from a commonJs module with **`module.exports`**.

## Comparing commonJs and ES modules syntax

- By default, any Js code that you write in node.js is *depicted* as commonJs module. And the *load* using `require()` and *export* using `module.exports`.
- For example, 
```js
module.exports.add = function(a, b) {
    return a + b;
}

module.exports.sub = function(a, b) {
    return a -b 
}
```

- We can also import the public function into another Node.js script using `require()`, for example:
```js
const {add, sub} = require('./math.js')

console.log(add(3, 4)) // 7
console.log(sub(5, 3))  // 2
```

- You can also simply enable ES modules in a Node.js package by changing the file extensions from `.js` to `.mjs`.
- for example, below is simple ES module(with an `.mjs` extension) exporting two function for public use:
```js
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}
```
- We can then import both functrrion using the `import` statement:
```js
import {add, sub} from './math.mjs'

console.log(add(3, 4)) // 7
console.log(sub(5, 3))  // 2
```
- Another way to enable ES modules in Your project can be done by adding a `type: module` field in the `package.json` file.
```js
{
    "name" : "my-app",
    "type" : "module"
}
```
