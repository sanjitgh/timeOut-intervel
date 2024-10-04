console.log(1)
console.log(2)
// setTimeout(() => {
//     console.log(3)
// })
// setTimeout(() => { 
//     console.log(3)
// }, 2000)
console.log(4)
console.log(5)
console.log(6)

let a = 0;
const id = setInterval(() => {
    a++;
    if(a >= 6){
        clearInterval(id)
    }
    console.log(a);
}, 1000)