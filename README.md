# fakeme
随机生成人名，手机号，邮箱，性别，id等信息，接口简单，数据覆盖全。

## Install

* NPM

`npm i fakeme`

* Broswer

[Source Code](https://github.com/PengJiyuan/fakeme/blob/master/lib/fakeme.umd.min.js);

* CDN

https://unpkg.com/fakeme@0.1.0/lib/fakedata.umd.min.js (更改fakeme后边的version号，获取指定版本的源文件)

## Usage

* Node

```javascript
const FakeMe = require('fakeme');
const fm = new FakeMe({
  lang: 'zh',
  sex: 'female'
});
fm.name({count: 10}); // [ '韶妙竹','宁初雪','彭幻珊','明醉波','云幼翠','高如曼','杨涵雁','吴青亦','孔之柔','红元菱' ]
fm.name({lang: 'en', count: 5}); // [ 'Kristine Wood','Claudia Lopez','Annabelle Griffin','Greta Simmons','Sonia Walker' ]
fm.id({length: 18, count: 2}); // [ 'FF4oAsoY_EGi1CJVfb', 'gnfDLKp_tJQd_NyQiK' ]
fm.email(); // [ 'fanny@cairns.net.au' ]
fm.sex(); // [ '男' ]
fm.sex({lang: 'en'}); // [ 'female' ]
fm.random(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5); // [ 'a', 'd', 'c', 'c', 'd' ]
```

* ES Module

```javascript
import FakeMe from 'fakeme';
const fm = new FakeMe();
fm.name();
```

* 浏览器

```html
<script src="https://unpkg.com/fakeme@0.1.0/lib/fakedata.umd.min.js"></script>
<script>
var fm = new FakeMe();
fm.name();
</script>
```

## Api

### FakeMe(opts: Object)

* opts.lang

指定全局语言 [默认: `zh`]，`lang`的值只能为`zh`或者`en`。(这个值会被具体调用的函数里传的`lang`覆盖)

* opts.sex

指定全局性别 [默认: `male`]，`sex`的值只能为`male`或者`female`。(这个值会被具体调用的函数里传的`sex`覆盖)

```javascript
import FakeMe from 'fakeme';
const fm = new FakeMe();
```

### fm.name(opts: Object): Array

返回值为数组。

* opts.lang

`可选`

这个参数指定生成中文或者英文的名字。

如果不指定，默认使用全局配置的`lang`。`lang`的值只能为`zh`或者`en`。

* opts.sex

`可选`

这个参数指定生成男性或者女性的名字。

如果不指定，默认使用全局配置的`sex`。`sex`的值只能为`male`或者`female`。

* opts.count

`可选`

(默认值: `1`)

这个参数指定随机生成名字的个数。

* opts.lastName

`可选`

这个参数指定生成名字的姓。比如:

```javascript
fm.name({lastName: '李'}); // [ '李秋白' ]
```

### fm.email(opts: Object): Array

返回值为数组。

* opts.type

`可选`

(默认值: `name`)

这个参数指定生成邮箱的类型，这个参数有三个可选项:

  * `name` - 邮箱的前半部分是英文名字
  * `number` - 邮箱的前半部分是随机的一串数字
  * `letter` - 邮箱的前半部分是随机的一串字母

* opts.sex

`可选`

这个参数在使用type为`name`时会生效，指定英文名字是男性还是女性的。

* opts.count

`可选`

(默认值: `1`)

这个参数指定随机生成邮箱的个数。

* opts.suffix

`可选`

这个参数可以指定邮箱的后缀。比如：

```javascript
fm.email({suffix: '@qq.com'}); // [ 'kennedy@qq.com' ]
```

### fm.sex(opts: Object): Array

返回值是一个数组。

* opts.lang

`可选`

这个参数指定生成中文或者英文的性别。

如果不指定，默认使用全局配置的`lang`。`lang`的值只能为`zh`或者`en`。

* opts.count

`可选`

(默认值: `1`)

这个参数指定随机生成性别的个数。

### fm.id(opts: Object): Array

返回值是一个数组。

* opts.length

`可选`

(默认值: `10`)

这个参数指定生成Id的长度。

* opts.count

`可选`

(默认值: `1`)

这个参数指定生成Id的个数。

### fm.random(list: Array, count: Number)

这个函数可以指定一个随机区域，然后从指定的列表中获得随机的元素。

* list

`可选`

(默认值: `[]`)

这个参数指定随机的区域。

* count

`可选`

(默认值: `1`)

这个参数制定获取随机元素的个数。

```javascript
fm.random(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5); // [ 'a', 'd', 'c', 'c', 'd' ]
```

## LICENSE

[MIT](./LICENSE) © PengJiyuan

