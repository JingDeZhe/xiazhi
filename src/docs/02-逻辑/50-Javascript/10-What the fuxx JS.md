# What the fuxx JS

众所周知，JS 由于诞生仓促，因此遗留了挺多奇奇怪怪的问题和特性，比如说反直觉的类型转换，`==`和`===`这些，这种状况在 ES6 发布后逐渐改善，过去的问题将之留到过去就行，但写代码哪能不碰到边界情况，因此，虽说已经不推荐使用那些个奇奇怪怪的特性，但大概了解他们还是需要的。

> 本文参考自[What the f\*ck JavaScript?](https://github.com/denysdovhan/wtfjs/blob/master/README-zh-cn.md)

## 抽象相等

1. 数组等于数组取反

```js
;[] == ![] // true
```

抽象相等运算符会将其两端的表达式转换为数字值进行比较，尽管这个例子中，左右两端均被转换为 0，但原因各不相同。数组总是真值（truthy）, 因此右值的数组取反后总是为 false，然后在抽象相等比较中被被类型转换为 0。而左值则是另一种情形，空数组没有被转换为布尔值的话，尽管在逻辑上是真值（truthy），但在抽象相等比较中，会被类型转换为数字 0。

于是，以下全部正确:

```js
[] == 0
![] == 0

[] == false
![] == false

[] != true
![] != true
```

但是有一点看上去很正常但结合上文来说就有点出乎意料的情况:

```js
;[] == [] // false
```

如果能说明白这里为什么为`false`，那对抽象相等也差不多了解了。如果按照<em c>空数组在逻辑上尽管是真值，但在抽象相等中会被转换为数字类型 0</em> 的话，上述就等同于`0 == 0`应该为`true`才是。

为了搞明白其中缘由，我们得要细想<em c>抽象相等</em>相比于<em c>严格相等</em>到底多做了些什么事情，概括来说，便是<em c>在比较相等之前尝试将两边的值转成相同类型</em>再作比较，这里需要注意到一点，如果两边类型本来就相等，那便没有转换的必要，因此，`[] == []`并不会先转换两边的空数组，结果为`false`。
