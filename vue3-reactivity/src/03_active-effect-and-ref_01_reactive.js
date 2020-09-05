const targetMap = new WeakMap()
let activeEffect = null

function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, (dep = new Set()))
    }
    dep.add(activeEffect)
  }
}

function trigger(target, key) {
  const depsMap = targetMap.get(target)
  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect())
  }
}

function effect(eff) {
  activeEffect = eff
  activeEffect()
  activeEffect = null
}

function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver)
      track(target, key)
      return result
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)
      if (result && oldValue != value) {
        trigger(target, key)
      }
    }
  }
  return new Proxy(target, handler)
}
let product = reactive({ price: 5, quantity: 2 })
let salePrice = 0
let total = 0

effect(() => {
  total = product.price * product.quantity
})

effect(() => {
  salePrice = product.price * 0.8
})

console.log(
  `Before updated total (should be 10) = ${total} salePrice (should be 4) = ${salePrice}`
)

product.quantity = 3

console.log(
  `After updated total (should be 15) = ${total} salePrice (should be 4) = ${salePrice}`
)

product.price = 100

console.log(
  `After updated total (should be 300) = ${total} salePrice (should be 80) = ${salePrice}`
)


