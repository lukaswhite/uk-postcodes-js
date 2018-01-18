# UK Postcodes JS

Comprises an ES2015 class named `UkPostcode` for validating and formatting UK Postcodes.
 
## Getting Started
 
Create an instance as follows:
 
```js
let postcode = new UkPostcode('B1 1BL');
```

Or, you can set the value like this:

```js
let postcode = new UkPostcode();
postcode.value = 'B1 1BL';
```

## Validating

Validating UK postcodes isn't quite as simple as, say, a US zip-code, nor is a single regular expression likely to cut it. However, this package has you covered.

```js
let postcode = new UkPostcode('b11bl');
if (postcode.isValid()) {
    // hurrah!
}
```

## Formatting

There's a right way to format a postcode, and there are all sorts of other ways you're likely to encounter - particularly if you're asking people for their postcode via a form on your website, for example.
 
The `formatted()` method will give you the "right" formatting; all uppercase, and with the space in the right place - i.e. right between the outcode and the inward code.

```js
let postcode = new UkPostcode('B1 1BL');
console.log('Your postcode is'+postcode.formatted());
// outputs "Your postcode is B1 1BL"
```

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
 
## Building
 
Install the dependencies:
 
```bash
npm i
``` 

Then run:

```bash
npm run prepublish
```

## Running the Tests

The package includes a number of tests*. 

Install the dependencies:
 
```bash
npm i
``` 

Then run:

```bash
npm run test
```

To run the tests without linting:

```bash
npm run testonly
```

* There's currently only a fairly limited number of tests; more to follow.

## TODO

* Support BF1
* Support BFPO
* Support BFPO c/o format
* Support Anquilla
* Add RequireJS support      
	      