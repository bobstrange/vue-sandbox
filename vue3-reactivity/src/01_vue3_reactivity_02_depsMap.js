// 複数のプロパティを持つオブジェクトのプロパティの変更
// に対してデータを保持する例

// 各プロパティの dep を保持するためのMap
const depsMap = new Map()

function track(key) {
  let dep = depsMap.get(key)
  if (!dep) {
    // 対象の key についてのdepが登録されていなければ初期化する
    depsMap.set(key, (dep = new Set()))
  }
  dep.add(effect)
}

function trigger(key) {
  let dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect())
  }
}

let product = { price: 5, quantity: 2 }
let total = 0

let effect = () => {
  total = product.price * product.quantity
}

track('quantity')
trigger('quantity')

console.log(total) // total is 10

product.quantity = 3

console.log(total) // total is still 10

trigger('quantity')
console.log(total) // total is 15
