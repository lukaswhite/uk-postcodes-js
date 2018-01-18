# UK Postcodes JS

Comprises an ES2015 class named `UkPostcode` for validating and formatting UK Postcodes.
 
## Examples
 
### Creating an instance using a valid postcode 
 
```js
let postcode = new UkPostcode('B1 1BL');
console.log(postcode.isValid()); // true
console.log(postcode.formatted()); // B1 1BL
```

### Creating an instance using a valid postcode, but incorrectly fomatted
 
```js
let postcode = new UkPostcode('b11bl');
console.log(postcode.isValid()); // true
console.log(postcode.formatted()); // B1 1BL
```

### Creating an instance using an invalid postcode
 
```js
let postcode = new UkPostcode('Q44 8JP');
console.log(postcode.isValid()); // false
console.log(postcode.formatted()); // Q44 8JP
```
 
> This might look correct, but postcodes may not start with a `Q` 
 
### Creating an instance using a clearly invalid postcode 
 
```js
let postcode = new UkPostcode('i am a fish');
console.log(postcode.isValid()); // false
console.log(postcode.formatted()); // i am a fish
```
 
### Modifying the value 
 
```js
let postcode = new UkPostcode('B1 1BL');
console.log(postcode.isValid()); // true
console.log(postcode.formatted()); // B1 1BL
postcode.value = 'rm1 3eD'
console.log(postcode.isValid()); // true
console.log(postcode.formatted()); // RM1 3ED
postcode.value = 'i am a fish';
console.log(postcode.isValid()); // false
console.log(postcode.formatted()); // i am a fish
 ```