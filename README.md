<h1 align="center">
N O D E V E R S I O N
<br>
  <a href="https://travis-ci.org/CodeDotJS/nodeversion">
  <img src="https://travis-ci.org/CodeDotJS/nodeversion.svg?branch=master">
  </a>
  <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
  <br>
</h1>

<p align="center">Quick way to scrap the latest node version available.</p>


## Install

```
$ npm install --save nvr
```

## Usage

```js
const nodeversion = require('nvr');

nodeversion().then(res => {
  console.log(res);
  // => { version: '10.5.0' }
});
```

## Related

- __[`Veno`](https://github.com/CodeDotJS/veno)__ `:` `Blazing fast node version comparer!`

## License

MIT &copy; [Rishi Giri](http://rishi.ml)
