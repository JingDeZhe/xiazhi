//
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R
  ? R
  : never

type T1 = MyReturnType<() => string>
type T2 = MyReturnType<() => number[]>

//
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[K]
}

type Person = {
  name: string
  age: number
  gender: number
}
type T3 = MyOmit<Person, 'age'>

//
type MyPick<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]: T[K]
}

type T4 = Pick<Person, 'age' | 'gender'>

export {}
