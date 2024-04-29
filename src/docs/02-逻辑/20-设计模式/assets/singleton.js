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
