// targetMap -> type WeakMap
//   オブジェクト名に対応するdepsMapを格納
// depsMap -> type Map
//   property名に対応するdependency(dep)を格納
// dep -> type Set
//   値が変更された時に実行される必要がある、effectsを格納

const targetMap = new WeakMap() // Reactive objectを保持する為に宣言

function track(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  dep.add(effect)
}

function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) { return }

  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect())
  }
}

// Test code
const product = { price: 5, quantity: 2 }
let total = 0
let effect = () => {
  total = product.price * product.quantity
}
track(product, 'quantity')

console.log(total) // total is 0 here

effect()

console.log(total) // total is updated to 10

product.quantity = 5

console.log(total) // total is still 10 here

trigger(product, 'quantity')

console.log(total) // total is updated to 25

const user = { firstName: 'John', lastName: 'Doe' }
let fullName

effect = () => {
  fullName = `${user.firstName} ${user.lastName}`
}

track(user, 'firstName')

console.log(fullName) // fullName is undefined here

effect()

console.log(fullName) // fullName is updated to 'John Doe'

user.firstName = 'Jane'

console.log(fullName) // fullName is still 'John Doe'

trigger(user, 'firstName')

console.log(fullName) // fullName is updated to 'Jane Doe'

user.lastName = 'Doedoe'

trigger(user, 'lastName')

console.log(fullName) // fullName is still 'Jane Doe' as 'lastName' is not tracked

