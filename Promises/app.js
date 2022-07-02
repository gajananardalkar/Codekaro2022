// document.getElementById('PRomiseId').addEventListener('click' , Promisefunction)

// function Promisefunction(){
//     console.log("Promise Download Function")

//     setTimeout(()=>{
//         console.log("in settimeout Promise function downloaded")
//     },5000)
//     console.log("After settimeout")
// }

let ifFileDownload = false;
let promiseDclare = new Promise((resolve, reject)=>{
    console.log("In Promise")
    setTimeout(()=>{
        if(ifFileDownload == true)
        resolve('File Downloaded Successfully')
        else
        reject('File Downloaded UnSuccessfull')
    },3000)
    console.log("After SettimeOut")    
})

promiseDclare.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})