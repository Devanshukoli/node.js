# How to import and use npm modules in Node.js

- There are particulary 2 ways.
    - 1. **CommonJs** modules
    - 2. **ES6** modules


## 1. CommonJs modules
- To import any module you can use the funciton `require(id)`. It accepts `id` as path to a module.
- To `require` a newly installed `npm` module, you just pass its name as `id`.

```js
const express = require('express');
```
- Now, Node.js will lookup for the module `express` in the `node_modules` folder inside the root of your project.

- After the import, the constnat `express` will hold all the functionality exported by the module `express`.

## 2. ES6 modules

- This is another approach to import modules in Node.js 
- Here, you're not using the `require` function, but rather the keyword `import`. There are quite a lot of ways to using it, but common way is : 
```js
import express from 'express';
```
- This imports the whole modules, similary to `require`. But if you don't need the whole module, you can use the **destructuring** syntax to import only the parts you need.
```js
import { Router } from 'express';
```
- In this case, as described you'll only be able to ues the `Router` class from the `express` module.
