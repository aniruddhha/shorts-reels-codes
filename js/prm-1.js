const prm = new Promise((res, _) =>{
    setTimeout(() => {
        res('🎯 Hello world')
    }, 1000)
});

prm.then( console.log )
.catch(console.log);

(async() => {
    const dt = await prm
    console.log(dt)
})()