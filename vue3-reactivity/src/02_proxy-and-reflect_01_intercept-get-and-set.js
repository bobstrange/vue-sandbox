let product = { price: 5, quantity: 2 }

console.log('quantity is ' + product.quantity)    // dot notation
console.log('quantity is ' + product['quantity']) // bracket notation
console.log('quantity is ' + Reflect.get(product, 'quantity')) // ES6 Reflect

let proxiedProduct = new Proxy(product, {})

console.log(proxiedProduct.quantity) // 2

proxiedProduct = new Proxy(product, {
  get() {
    console.log('Get was called')
    return 'Not the value'
  }
})

console.log(proxiedProduct.quantity)
// 'Get was called'
// 'Not the value'

proxiedProduct = new Proxy(product, {
  get(target, key) {
    console.log('Get was called with key = ' + key)
    return target[key]
  }
})

console.log(proxiedProduct.quantity)
// 'Get was called with key = quantity'
// 2

proxiedProduct = new Proxy(product, {
  get(target, key, receiver) {
    console.log('Get was called with key = ' + key)
    return Reflect.get(target, key, receiver)
  }
})

console.log(proxiedProduct.price)

