// 🎯 object copy
const obj1 = { 
    a: 1, 
    b: 2 
}
// Write your code here
const cp1 = { ...obj1 }
const cp2 = Object.assign({}, obj1)
console.log(cp1)
console.log(cp2)

// 🎯 object values to array
const obj2 = { 
    a: 'hello', 
    b:'hi', 
    c: 'how'
}
// Write your code here
const arr = Object.values(obj2)
console.log(arr)


// 🎯 merge two objects
const obj3 = { 
    a: 1, 
    b: 2
}
const obj4 = { 
    c : 3,
    d: 4,
}
// Write your code here
const mrg ={ ...obj3, ...obj4 }
console.log(mrg)