// 🎯 String to Array
const str1 = 'hello'
const chAr = [...str1]
console.log(chAr)

// 🎯 Reverse String
const str2 = 'hello'
const rvSt = str2.split('')
            .reverse()
            .join('')
console.log(rvSt)

// 🎯 Ternary Operators
const dt = true
const res = dt ? 'Okay' : 'Not Okay'
console.log(res)

// 🎯 Short Circuit OR (||)
const str3 = 'Some Data'
const usIp = 'ab'
const res1 = usIp || str3
console.log(res1)

// 🎯 Remove Duplicates from Array
const ar = [1, 1,2,2,3,4,5]
const nwAr = Array.from(
    new Set(ar)
)
console.log(ar)