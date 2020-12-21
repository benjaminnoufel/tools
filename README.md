# @benjaminnoufel/tools

It's a different collection of tools.

![Code Style CI](https://github.com/benjaminnoufel/tools/workflows/Code%20Style%20CI/badge.svg) ![Test CI](https://github.com/benjaminnoufel/tools/workflows/Test%20CI/badge.svg) ![Package](https://github.com/benjaminnoufel/tools/workflows/Package/badge.svg) ![Package npmjs](https://github.com/benjaminnoufel/tools/workflows/Package%20npmjs/badge.svg)

## Requirements

- [NPM][npm] or [Yarn][yarn]

## Installation

### NPM

```console
$ npm install --save @benjaminnoufel/tools
```

### Yarn

```console
$ yarn add @benjaminnoufel/tools
```

## Usage

### Use Validator
```jsx
import {phoneNumberIsValid, passwordIsValid, emailIsValid} from "@benjaminnoufel/tools";
import {useState} from "react";

const App = () => {
    const [state, setState] = useState({ password: null, phone: null, email: null})

    const handleChange = (e) => {
        if (e.target.name === "phone" && phoneNumberIsValid(state.phone)) {
            setState({
                ...state,
                phone: e.target.value
            })
        }
        if (e.target.name === "password" && passwordIsValid(state.password)) {
            setState({
                ...state,
                password: e.target.value
            })
        }

        if (e.target.name === "email" && emailIsValid(state.email)) {
            setState({
                ...state,
                email: e.target.value
            })
        }
    }       


    return (
        <>
            <input placeholder="Email" type="email" name="email" value={state.email} onChange={handleChange} />
            <input placeholder="Password" type="password" name="password" value={state.password} onChange={handleChange} />
            <input placeholder="phone number" type="text" name="phone" value={state.phone} onChange={handleChange} />
        </>
    );   
}

```


### Use Format
```jsx
import {formatCurrency, formatDate, formatNumber} from "@benjaminnoufel/tools";

const App = () => {
    
    
    return (
        <>
            <p>Price: {formatCurrency("fr-FR", "EUR", 125.89)}</p>
            <p>Order date: {formatDate("fr-FR", "01/01/1970")} </p>
            <p>Number of items: {formatNumber("fr-FR", 2, 4)} </p>
        </>
    );   
}

```

### Use path
```jsx
import {normalizePath} from "@benjaminnoufel/tools";

const App = () => {
    
    const url = "/static//image/logo.png"
    
    return (
        <>
            <p>Url of logo: http://localhost/{normalizePath(url)} </p>
            <p>Order date: {formatDate("fr-FR", "01/01/1970")} </p>
            <p>Number of items: {formatNumber("fr-FR", 2, 4)} </p>
        </>
    );   
}

```

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
