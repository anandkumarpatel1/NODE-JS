a = 20;

let waitData = new Promise((reslove, reject) => {

    setTimeout(() => {
        reslove(80)
    }, 3000);

})

waitData.then((data) => {

    console.log(a + data)

})