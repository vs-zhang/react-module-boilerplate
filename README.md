## React Module Boilerplate


### How to Install

    npm install && npm start
 
### Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [redux-devtools](https://github.com/gaearon/redux-devtools)
* [webpack](https://github.com/webpack/webpack)
* [react-css-module](https://github.com/gajus/react-css-modules)
* [eslint](http://eslint.org)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [jest](https://github.com/facebook/jest)

### File structure

```
├── src                      # Application source code
│   ├── assets               # Assets for images
│   ├── components           # Reusable Components
│   ├── Layouts              # Pages Layouts (Pure function components)
│   ├── styles               # Application-wide styles (generally settings)
│   │   ├── app.scss 
│   ├── utils                # Utility func files
│   │   ├── store            # Create and instrument redux store
│   │   └── devtools.js      # Configuration for redux devtools
│   └─── main.js             # Application bootstrap and rendering
└── __tests__                # Tests with Jest
```