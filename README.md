[![npm version](https://badge.fury.io/js/%40groceristar%2Fselect-component.svg)](https://badge.fury.io/js/%40groceristar%2Fselect-component)

Right now our select is bound with AntD library
and this is not good, but at least it works as we need it at our search form project: https://github.com/ChickenKyiv/recipe-search-react


Simple project where i'm testing how this component work: https://github.com/ChickenKyiv/selects

we also have a separated repo for just testing this selects: https://github.com/ChickenKyiv/selects/blob/master/src/components/SearchForm/SelectContainer.js

and our meal form that we has right now at #23 and move later to recipe-box project is: https://github.com/GroceriStar/react-only-intern-23 & https://github.com/ChickenKyiv/recipe-box




we also can try to combine our meal form at separated calendar plugin in order to test that everything is working fine https://github.com/GroceriStar/calendar


answer the question - can we have this package build without having AntD as dependencies here???


https://ant.design/docs/react/getting-started#Import-on-Demand

I want to make a 2 versions of this component: clean, without any markup

and version that work with antd select - which is our current ui library
and version with react-select - which we trying to use, but it was hard for me to make it work for our case....

Hierarhy is:
```
    - GroupedElements
      - SelectContainer
```

SelectContainer uses AntD design.

ReactSelectWrapper uses React-select module


- [ ] add ability to call components like ~"name/%Component_Folder%" == "name/Component_Folder/Component_name" at babel config

- [ ] test how Creatable will handle a disabled flag(i assume ok, but we don't know it)


- [ ] handle ingredients case - when you have 13000 items - and it's better to fetch them dynamically

<!---

[![npm version](https://badge.fury.io/js/%40groceristar%2Fgrocery-component.svg)](https://badge.fury.io/js/%40groceristar%2Fgrocery-component)

example how i use list:

```
// this is an ingredient for list
import React, { Component, Fragment } from 'react';

import List from './List/DefaultList'
or import from separated module via npm logic...

const IngredientsList = ({ ingredients, title }) => (

  <Fragment>
    <h2>{title}</h2>
    <DefaultList items={ingredients} />
  </Fragment>

);
```

 - for creating build run 'yarn clean && yarn build'
 - tests, lint, coverage is not working at this moment

---

-->


<!---
эта часть для курса, пока на нее забей.

https://medium.com/@Powderham/sharing-react-components-between-separate-projects-self-hosting-with-git-installing-with-yarn-npm-d3275b64239c
https://babeljs.io/docs/en/babel-preset-react
https://www.useloom.com/share/e5f01b62ff2441b9a60659cb3b2caa74

https://drive.google.com/file/d/1-X1I04sM4zKS0zqb_zbxC8HMv0ve2a42/view

https://drive.google.com/file/d/1N7RFOWRimN1tjVWh5JuFsTYAghvsmKzy/view

https://drive.google.com/file/d/1sqwIJOedsayeZ3lIq9j1_u_xCmDmYXw9/view

https://drive.google.com/file/d/15c0UwInohN9kb9mj4UM9hE3c-LwGKkXv/view

https://github.com/GroceriStar/es6-package/blob/master/package.json

https://rollupjs.org/guide/en#babel

https://github.com/GroceriStar/grocery-react-component/blob/master/package.json

https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78

https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738

https://medium.com/@Powderham/sharing-react-components-between-separate-projects-self-hosting-with-git-installing-with-yarn-npm-d3275b64239c

https://itsfoss.com/best-linux-screen-recorders/

https://www.creative-tim.com/product/rotating-css-card
https://github.com/codrops/DiagonalSlideshow/blob/master/index.html

-->


<!---



<p align="center">
  <a href="https://travis-ci.org/eunikitin/modern-package-boilerplate">
    <img src="https://travis-ci.org/eunikitin/modern-package-boilerplate.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://coveralls.io/github/eunikitin/modern-package-boilerplate?branch=master">
    <img src="https://coveralls.io/repos/github/eunikitin/modern-package-boilerplate/badge.svg?branch=master" alt="Coverage Status">
  </a>
  <a href="https://david-dm.org/eunikitin/modern-package-boilerplate">
    <img src="https://david-dm.org/eunikitin/modern-package-boilerplate/status.svg" alt="dependencies Status">
  </a>
  <a href="https://david-dm.org/eunikitin/modern-package-boilerplate?type=dev">
    <img src="https://david-dm.org/eunikitin/modern-package-boilerplate/dev-status.svg" alt="devDependencies Status">
  </a>
  <a href="https://david-dm.org/eunikitin/modern-package-boilerplate?type=peer">
    <img src="https://david-dm.org/eunikitin/modern-package-boilerplate/peer-status.svg" alt="peerDependencies Status">
  </a>
</p>



# Groceristar-fetch module

#### Synopsis
  This is a module for using API like wrappers for getting food data for use in many projects. Just Like an database and fetch API in JS

[![Build Status](https://travis-ci.org/GroceriStar/groceristar-fetch.svg?branch=master)](https://travis-ci.org/GroceriStar/groceristar-fetch)
[![npm version](https://badge.fury.io/js/%40groceristar%2Fgrocery-component.svg)](https://badge.fury.io/js/%40groceristar%2Fgrocery-component)




[Introduction Article]()

[Trello board with current tasks]()

[Documentation Website]()


#### Installation

`npm install @groceristar/grocery-component`
or
`yarn add @groceristar/grocery-component`




#### Code Example

```
const { List } = require('@groceristar/grocery-component')


// returns

example
```



#### Tests

`npm test`


#### Contributors

@vadim9999, @atherdon


---
Tasks:
- [ ] [add tests]()
- [ ] [make build working nice]()
- [ ] ESLint resolver too https://medium.com/bootstart/why-you-should-use-babel-resolvers-210615fc41d
- [ ] ignore lib folder, so it will be created only when we publish it on npm. we don't need it locally. delete from source, then only ignore, so it wouldn't be at github repo...
---



[npm-run-script](https://docs.npmjs.com/cli/run-script)

[Introduction to NPM Scripts](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633)



@TODO add tests

Trello Board:

Sandbox Editor:

Created with help of this articles:
https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738
https://medium.com/@adrianli/the-idiot-s-guide-to-publishing-a-react-component-to-npm-2b66b1ac03e0


-->
