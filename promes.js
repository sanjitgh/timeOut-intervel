const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success);
        }
        else (
            reject(success)
        )
    })
}

myLoader()
    .then(data => console.log('success value', data))
    .catch(err => console.log('rejected value', err))


//


fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


//

async function loadData() {
    const res = await fetch('url');
    const data = await res.json();
    console.log(data)
}
// loadData()

// arrow function

const taskLoder = async () => {
    const res = await fetch('url');
    const data = await res.json();
    console.log(data)
}
// taskLoder()