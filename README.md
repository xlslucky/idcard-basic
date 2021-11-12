# idcard-basic

***借鉴 [idcard](https://github.com/navyxie/idcard)，由于 `idcard` 代码库引用地区json体积太大，所以写了个简易版。idcard-basic [demo](https://codepen.io/xlslucky/pen/KKvxRdq)。***

## 安装

```shell
$ npm i idcard-basic
# or
$ yarn add idcard-basic
# or
$ pnpm i idcard-basic
```

## 使用

### verify

```js
const { verify } = require('idcard-basic')
const idcard = 'xxxxxxxxxxxxxxxxxx' // 身份证号码
verify(idcard) // false | true
```

### info

```js
const { info } = require('idcard-basic')
const idcard = 'xxxxxxxxxxxxxxxxxx' // 身份证号码
info(idcard)
// 成功
/* {
  valid: true,
  gender: 'M',
  genderText: '男',
  birthday: '20000101',
  age: 21,
  constellation: '摩羯',
  cardType: 1,
  cardText: '大陆'
} */

// 失败
/* {
  valid: false
} */
```

### constellation

```js
const { constellation } = require('idcard-basic')
constellation('20000101') // 摩羯
```