/**
 * ES6类的方式实现
 */
export class Singleton {
  constructor(name) {
    if (!Singleton.instance) {
      this.name = name
      Singleton.instance = this
    } else {
      return Singleton.instance
    }
  }
}

/**
 * 传统方式实现，利用闭包
 */
export const Singleton2 = (() => {
  let instance

  const createInstance = (name) => {
    return {
      name,
    }
  }

  return {
    getSingleton(name) {
      if (!instance) {
        instance = createInstance(name)
      }
      return instance
    },
  }
})()
