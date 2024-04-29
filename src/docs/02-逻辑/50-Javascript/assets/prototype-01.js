/**
 * 一个普通函数，最为常用
 */
function sayHi() {
  console.log(`你好，我是${this?.name}`)
}

/**
 * 构造函数
 * 从技术上来说和普通函数并无区别，但有几个特点:
 * 1. 首字母大写
 * 2. 内部使用了 this 这个变量
 * 3. 使用 new 操作符调用
 *
 * 上述的几点特征只是约定俗成，并没什么强制性，不是说只有构造函数才有这三点特征
 * 实际上上面的普通函数 sayHi 里也用了 this
 */
function Person(name) {
  this.name = name
}

/**
 * 在Person构造函数的原型上添加一个sayHi普通函数
 */
Person.prototype.sayHi = sayHi

/**
 * 另一个构造函数
 */
function Animal(name) {
  this.name = name
}

/**
 * 构造函数使用 new 来调用，new 这个操作符的内部机制后面会说，总而言之，它会返回一个新的对象
 */
const 张三 = new Person('张三')
const 李四 = new Person('李四')
const 熊猫 = new Animal('熊猫')

/**
 * 普通函数也能 new 出来一个对象，但没什么意义，因为内部没有在 this 上附加属性
 */
const 莫名其妙 = new sayHi()

console.log('> 构造函数: Person')
console.dir(Person)

console.log('> 函数: sayHi')
console.dir(sayHi)

console.log('> Person实例: 张三')
console.dir(张三)

console.log('> Person实例: 李四')
console.dir(李四)

console.log('> sayHi实例: 莫名其妙')
console.dir(莫名其妙)

/**
 * 实例.__proto__实际上不是一个标准写法，只是因为多数JS引擎都实现了__proto__这个特殊属性所以保留了下来而已
 * 标准的写法应该是Object.getPrototypeOf(实例)
 */
console.log('> 张三.__proto__')
console.log(张三.__proto__)

console.log('> 李四.__proto__')
console.log(李四.__proto__)

/**
 * 实例.__proto__ === Object.getPrototypeOf(实例)
 */
console.log('> 李四.__proto__ === Object.getPrototypeOf(李四)')
console.log(李四.__proto__ === Object.getPrototypeOf(李四))

/**
 * 由于张三和李四都是Person的实例，因此两者的__proto__对象相同
 */
console.log('> 张三.__proto__ === 李四.__proto__')
console.log(张三.__proto__ === 李四.__proto__)

/**
 * 毋庸置疑，这两个肯定不相同，不然就乱套了
 */
console.log('> 张三.__proto__ === 熊猫.__proto__')
console.log(张三.__proto__ === 熊猫.__proto__)

/**
 * 注意，张三的__prpto__并不是Person这个构造函数，而是Person构造函数的prototype
 * 这里大家可能会突然疑惑，怎么又多出来一个prototype，到这里只需要记住，prototype是函数特有的属性
 * prototype的作用是作为构造函数 new 出来的所有实例的共同可访问对象，用来节省内存，也就是实例的__proto__
 */
console.log('> 张三.__proto__ === Person')
console.log(张三.__proto__ === Person)

/**
 * 再次强调一遍，实例的__proto__指向的是其构造函数的prototype，因此只要在构造函数的prototype上附加的属性
 * 这个构造函数的所有实例都可以访问到
 */
console.log('> 张三.__proto__ === Person.prototype')
console.log(张三.__proto__ === Person.prototype)

/**
 * 当然，你也可能好奇构造函数的__proto__是什么东西，首先，构造函数和函数在技术上并无区别，都可以认为是一个函数
 * 其次，在JS中函数也是一个对象，因此对象（这里是函数）的__proto__指向的是其构造函数的prototype也成立
 * 函数作为对象存在，它的构造函数其实是 Function，也就是说，函数的__proto__等于Function.prototype
 *
 */
console.log('> Person.__proto__')
console.log(Person.__proto__)

/**
 * 上面说过构造函数的prototype是给其所有实例共享的一个对象，因此，不同构造函数的prototype肯定是不同的，不然就乱套了
 */
console.log('> Animal.prototype === Person.prototype')
console.log(Animal.prototype === Person.prototype)

/**
 * 再次强调一遍，Object.getPrototypeOf(Person)是__proto__的标准写法
 * 构造函数.__proto__ === Function.prototype !== Person.prototype
 */
console.log('> Object.getPrototypeOf(Person) === Person.prototype')
console.log(Object.getPrototypeOf(Person) === Person.prototype)

/**
 * Object.getPrototypeOf(实例) === 实例.__proto__ === 实例的构造函数.prototype
 */
console.log('> Object.getPrototypeOf(张三) === Person.prototype')
console.log(Object.getPrototypeOf(张三) === Person.prototype)

/**
 * Object.getPrototypeOf(构造函数) === 构造函数.__proto__ === Function.prototype
 */
console.log('> Object.getPrototypeOf(Person) === Function.prototype')
console.log(Object.getPrototypeOf(Person) === Function.prototype)

/**
 * 一个很特殊的情况：Function.__proto__ === Function.prototype
 * 其实细想之下也可以理解，Function是一个对象，对象的__proto__指向的是其构造函数的prototype
 * 而恰好，Function作为对象，构造函数就是 Function，因此 Function.__proto__ === Function.prototype
 * 虽然两者相同，但意义不一样，实际上这个特例并没有特殊记忆的必要
 */
console.log('> Function.__proto__ === Function.prototype')
console.log(Function.__proto__ === Function.prototype)

/**
 * 原型对象也是个普通对象，它也有自己的原型对象，可以一直这么续下去直到 Object.prototype.__proto__，也就是 null
 */
console.log('> 张三.__proto__.__proto__ === Object.prototype')
console.log(张三.__proto__.__proto__ === Object.prototype)

/**
 * 孤立地调用普通函数时，其内部的 this 为undefined
 * 上面这句话实际上不是绝对的，在非 strict 模式下孤立函数的 this 指向的是 window对象
 * 但现在的多数环境下都是 strict 模式，所以直接认为孤立函数内的 this 是 undefined还要把稳些
 */
console.log('> sayHi()')
sayHi()

console.log('> 张三.sayHi()')
张三.sayHi()

console.log('> 李四.sayHi()')
李四.sayHi()
