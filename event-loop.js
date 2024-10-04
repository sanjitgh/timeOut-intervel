function a() {
    console.log('a');
    b();
    console.log('aa')
}
setTimeout(()=>{
    console.log('timeOut')
}, 1000)
function b() {
    console.log('b');
    c();
    console.log('bb')
}
function c() {
    console.log('c')
    console.log('cc')
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
a();