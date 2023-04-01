Introduction to Node.js

## What is Node.js?

the server-side JavaScript runtime environment. Node.js is built on top of the Google Chrome V8 JavaScript engine, and it's mainly used to create web servers - but it's not limited to just that.

## Thory stuff for node.js background check

## First node.js example

- [hello_world.js](./hello_world.js)
- [more examples](https://github.com/nodejs/examples)

## How much JavaScript do you neeed in order to learn in depth concepts of Node.js?

- [Lexical Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Expressoins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
- [Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#what_is_a_variable)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [`this` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) 
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Scops](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [ECMAScript 6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)

## Asynchronous programming
- This is also fundamental for Node.js
- [Asynchronous programming and callbacks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Timers](https://nodejs.org/api/timers.html)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [The Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

## Difference between Node.js and Browser JavaScript
- Both are JavaScript
- From the perspective of Front-end developers, who are using JavaScript hardcore, Node.js bring with them a huge advantage: The comfort of using JavaScript on both the client and the server side.
- In the browser, Most of time we are dealing with the DOM,or other web APIs like Cookies. Those don't exist in Node.js
- Here, You don't have the `document`, `window` and all the other objects that are provided by the browser.
- Another diff. is that in Node.js you control the environment. Unless you are building a open source app that anyone can deploy anywhere, you know which versoin of Node.jsyou will run the app on.
- Compared to the browser, where you have to support a wide range of browsers and versions.
- Another diff. is that Node.js supports both the CommanJs and the ES modules systems(since node.js v12), while in the browser we are starting to see the ES modules being used.
- In practice, this means that you can use both `require()` and `import()` in Node.js, while you are limited to `import()` in the browser.

## The v8 JavaScript engine
- V8 is the name of Js engine that powers Google Chrome. It's the thing that takes our Js code and executes it.
- The cool thing is that v8 is independent of the browser in which it's hosted.
- Thanks to that, thenode.js ecosystem is huge and also powers desktop apps, like electron.

* There are Other js engines as well.
- Firefox has SpiderMonkey
- Safari has Nitro
- Edge has Chakra 
- All this engines are implement the ECMAScript standard.
- V8 is written in C++ and it's open source.
# compilation
-JavaScript is generally considered an interpreted language, but modern Js engine no longer just interpret Js code, they compiler it.
- This happening since the  2009, when the SpiderMonkey Js compiler was added to FireFox.

## A small Intro to NPM package manager
- `npm` is the standardpackage manager for Node.js
- In recent days, 2.1 million package are reported to  being listed in the npm registry. Mkaing it biggest package manager in the world.
- [yarn](https://yarnpkg.com/) and [pnpm](https://pnpm.io/) are alternatives of npm.

# packages
- `npm` manages downloads of dependencies of your project.
- `npm install` OR `npm i` command is used to install packages. You can also install single package by `npm i <package name>.
- Often you'll see more flags added to  this command.
--save-dev installs and adds the entry to the package.json file devDependencies
--no-save installs but does not add the entry to the package.json file dependencies
--save-optional installs and adds the entry to the package.json file optionalDependencies
--no-optional will prevent optional dependencies from being installed
Shorthands of the flags can also be used:

-S: --save
-D: --save-dev
-O: --save-optional

- You can also  update a package by `npm update`.
- NPM also supports **versioning**  of packages. You can install specific version  of package by `npm i <package name>@<version>`.
# Running tasks
- `npm run` command is used to run tasks.
