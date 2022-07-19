// document.getElementById('zero').addEventListener('click', Display)
// document.getElementById('one').addEventListener('click', Display)
// document.getElementById('two').addEventListener('click', Display)
// document.getElementById('three').addEventListener('click', Display)
// document.getElementById('four').addEventListener('click', Display)
// document.getElementById('five').addEventListener('click', Display)
// document.getElementById('six').addEventListener('click', Display)
// document.getElementById('seven').addEventListener('click', Display)
// document.getElementById('eight').addEventListener('click', Display)
// document.getElementById('nine').addEventListener('click', Display)
// document.getElementById('divisionid').addEventListener('click', Display)
// document.getElementById('multiplyid').addEventListener('click', Display)
// document.getElementById('subtractid').addEventListener('click', Display)
// document.getElementById('additionid').addEventListener('click', Display)
// document.getElementById('eraseid').addEventListener('click', Display)

 
//  function Display(){
//    let zero = document.getElementById('zero').innerHTML;
//    document.getElementById('displayid').innerHTML = zero
//    let one = document.getElementById('one').innerHTML;
//    document.getElementById('displayid').innerHTML = one
//    let two = document.getElementById('two').innerHTML;
//    document.getElementById('displayid').innerHTML = two
//    let three = document.getElementById('three').innerHTML;
//    document.getElementById('displayid').innerHTML = three
//    let four = document.getElementById('four').innerHTML;
//    document.getElementById('displayid').innerHTML = four
//    let five = document.getElementById('five').innerHTML;
//    document.getElementById('displayid').innerHTML = five
//    let six = document.getElementById('six').innerHTML;
//    document.getElementById('displayid').innerHTML = six
//    let seven = document.getElementById('seven').innerHTML;
//    document.getElementById('displayid').innerHTML = seven
//    let eight = document.getElementById('eight').innerHTML;
//    document.getElementById('displayid').innerHTML = eight
//    let nine = document.getElementById('nine').innerHTML;
//    document.getElementById('displayid').innerHTML = nine
//    let subtract = document.getElementById('subtractid').innerHTML;
//    document.getElementById('displayid').innerHTML = subtract
//    let add = document.getElementById('additionid').innerHTML;
//    document.getElementById('displayid').innerHTML = add
//    let multiply = document.getElementById('multiplyid').innerHTML;
//    document.getElementById('displayid').innerHTML = multiply
//    let division = document.getElementById('divisionid').innerHTML;
//    document.getElementById('displayid').innerHTML = division
//  }
// document.getElementById('one').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[1]
// })
// document.getElementById('two').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[2]
// })
// document.getElementById('three').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[3]
// })
// document.getElementById('four').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[4]
// })
// document.getElementById('five').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[5]
// })
// document.getElementById('six').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[6]
// })
// document.getElementById('seven').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[7]
// })
// document.getElementById('eight').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[8]
// })
// document.getElementById('nine').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[9]
// })

// document.getElementById('divisionid').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[10]
// })

// document.getElementById('multiplyid').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[11]
// })

// document.getElementById('subtractid').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[12]
// })

// document.getElementById('additionid').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[13]
// })

// document.getElementById('eraseid').addEventListener('click', ()=>{
//     document.getElementById('displayid').innerHTML = Num[14]
// })

// let Num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '/', '*', '-', '+']


// document.getElementById('zero').addEventListener('click',insert(0))
// document.getElementById('one').addEventListener('click',insert(1))
// document.getElementById('two').addEventListener('click',insert(2))
// document.getElementById('three').addEventListener('click', insert(3))
// document.getElementById('four').addEventListener('click', insert(4))
// document.getElementById('five').addEventListener('click', insert(5))
// document.getElementById('six').addEventListener('click', insert(6))
// document.getElementById('seven').addEventListener('click', insert(7))
// document.getElementById('eight').addEventListener('click', insert(8))
// document.getElementById('nine').addEventListener('click', insert(9))
// document.getElementById('divisionid').addEventListener('click', insert('/'))
// document.getElementById('multiplyid').addEventListener('click', insert('*'))
// document.getElementById('subtractid').addEventListener('click', insert('-'))
// document.getElementById('additionid').addEventListener('click', insert('+'))

// function insert(val){
//     console.log(val)
//      document.getElementById('displayid').innerHTML = val
// }


let string = "";
let buttons = document.querySelectorAll('.number');
Array.from(buttons).map((button)=>{
    console.log(button)
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            console.log(string , "1IF")
            document.getElementById('displayid').innerHTML = string
        }
        else if(e.target.innerHTML == 'C'){
            console.log(string , "2IF")
            string = " "
            document.getElementById('displayid').innerHTML =  string 
        }
        else if(e.target.innerHTML == 'E'){
            console.log(string , "3IF")
            string = string.slice(0, -1)
            document.getElementById('displayid').innerHTML =  string 
        }
        else{
            console.log(string , "else")
            string = string + e.target.innerHTML
            document.getElementById('displayid').innerHTML = string
        }
    })
})

// document.getElementById('calculatorid').addEventListener('click', ()=>{
//     console.log('hiii')
//    let numContainer = document.getElementsByClassName('number-container')
//    console.log(numContainer)

//    //    numContainer.classList.add('d-none')
// })

let functionalButton = document.querySelectorAll('.btn');
// console.log(functionalButton)

Array.from(functionalButton).map((button)=>{

        console.log(button)

    button.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML)

       if(e.target.innerHTML == 'Area'){
        document.getElementById('Areacalculator').classList.remove('d-none')
          let length =  document.getElementById('arealength').value
          let width = document.getElementById('areawidth').value
          console.log(length)
          console.log(width)
                document.getElementById('Areasolution').addEventListener('click',()=>{
                    let result = (length * width)
                    console.log(3 * 2)
                    let resultdiv = document.createElement('div')
                    let parentdiv = document.getElementById('solution')
                    parentdiv.appendChild(resultdiv)
                    resultdiv.innerHTML = result
                })

          
       }else{
        console.log("not area")

       }
    })
})