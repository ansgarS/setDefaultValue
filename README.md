# setDefaultValue

Sets a Default-Value, if null or undefined is given

## Usage

easily set default values for any variable

```js
import defaults from "set-default-value";

console.log(defaults(null).to(5)); // 5
console.log(defaults(10).to(5)); // 10
```

Replaces undefined
```js
import defaults from "set-default-value";

console.log(defaults(undefined).to(5)); // 5
console.log(defaults("hi").to("default")); // "hi"
```

## API

```js
typedef Options = {
    checkNull:      Bool,
    checkUndefined: Bool
};

defaults(<Any>, <Options?>).to(<Any>)
```

It checks for null and undefined by default.
