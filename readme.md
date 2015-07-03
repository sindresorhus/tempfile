# tempfile [![Build Status](https://travis-ci.org/sindresorhus/tempfile.svg?branch=master)](https://travis-ci.org/sindresorhus/tempfile)

> Get a random temp file path


## Install

```sh
$ npm install --save tempfile
```


## Usage

```js
var tempfile = require('tempfile');

tempfile({ext:'.png'});
//=> /var/folders/_1/tk89k8215ts0rg0kmb096nj80000gn/T/4049f192-43e7-43b2-98d9-094e6760861b.png

tempfile({rootpath: '/my/custom/path/', ext:'.png'});
//=> /my/custom/path/4546h192-42b1-43b2-41d9-023e6730432c.png

tempfile({prefixpath: 'unicorns', ext:'.png'});
//=> /var/folders/_1/tk89k8215ls0rg0khb016nj80000gn/T/unicorns/4049f192-43e7-43b2-98d9-094e6760861b.png
```


## API

### tempfile({Options})

#### rootpath

Type: `string`

Optionally supply the root path.

#### prefixpath

Type: `string`

Optionally supply the a prefix path.

#### ext

Type: `string`

Optionally supply an extension to append to the path.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
