# setDefaultValue
Sets a Default-Value, if null or undefined is given

## API

```js
defaults(<Any>, options?).to(<Any>)

options = {
    checkNull:      Boolean,
    checkUndefined: Boolean
};
```
It checks for null and undefined by default.

## Example

Replaces null-values
```js
import defaults from "set-default-value";

const value = defaults(null).to(5);

console.log(value) // 5
```

Replaces undefined
```js
import defaults from "set-default-value";

const value = defaults(undefined).to(5);

console.log(value) // 5
```

