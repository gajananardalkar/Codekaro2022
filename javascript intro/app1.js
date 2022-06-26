//  function Griender(Ingrideent1,Ingrideent2){
//   let result = Ingrideent1 + Ingrideent2;
//  console.log(result)
//  console.log(Ingrideent1 + Ingrideent2)
// return Ingrideent1 + Ingrideent2;
// }
// let returnTest = Griender(3,2)
// console.log(returnTest)

// let User =
//     {
//          name : 'Gajanan',
//         BasicPay : 10000,
//         HRA :5000,
//         Age : 23
//     }


// function TotalSalary(basic, hra){
//     return basic+hra;
// }
// let salary = TotalSalary(User.BasicPay, User.HRA)
// console.log("total Salary is =", salary)

// let number = [1,2,3,4,5,6,7,8,9,10]
// for (let i =0; i<number.length ; i++){
//     let table = number[i]*13;
//     console.log(table)
// }

// let MapNumber = [1,2,3,4,5,6,7,8,9,10]

// let sqr = MapNumber.map (number=>{
//     return  number * number;
//     // console.log(squarenum)
// });
// console.log(sqr)


let students = [
    {
    name:'Gajanan',
    city:'mumbai',
    age:24,
    education:'graduate'
    },
    {
    name:'Jack',
    city:'MP',
    age:28,
    education:'MSC'
    },
    {
        name:'max',
        city:'UP',
        age:34,
        education:'graduate'
    },
    {
        name:'Aniket',
        city:'Lucknow',
        age:20,
        education:'SSC'
    },
    {
        name:'Lalit',
        city:'JK',
        age:44,
        education:'HSC'
    },
    {
        name:'Gajanan',
        city:'mumbai',
        age:24,
        education:'graduate'
    },
    {
            name:'Gajanan',
            city:'mumbai',
            age:18,
            education:'MSC'
    },
    {
            name:'Gajanan',
            city:'mumbai',
            age:14,
            education:'SSC'
    }
]

let filterStud = students.filter(moreage =>{
   return moreage.age > 25
//    return moreage.age
}).map(moreage => {
    return "Name is :" +moreage.name + " & Age is :" +moreage.age
})
// console.log("Name of student:",filterStud, "and there Age is ",filterStud)
console.log(filterStud)