
// 🔥 calling any website 
// from javascript 🔥

const url = 'https://reqres.in/api/users';

// 1. using promise and then
fetch(url)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);

// 2. or use async/await for same
(async() => {
    try {
        const res = await fetch(url)
        const json = await res.json()
        console.log(json)
    } catch (error) {
        console.error(err)
    }
})();

