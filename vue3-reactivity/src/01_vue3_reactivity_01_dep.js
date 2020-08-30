// シンプルな計算をReactiveにする例
//
let price = 5
let quantity = 2
let total = 0

// Create a storage
let dep = new Set()

let effect = () => { total = price * quantity }

// Add the code into the storage
function track() {
  dep.add(effect)
}

// Re-Run all the code in storage
function trigger() {
  dep.forEach(effect => effect())
}

track()
effect()
console.log(total) // total is 10

quantity = 3
console.log(total) // total is still 10

trigger()
console.log(total) // total is updated to 15
