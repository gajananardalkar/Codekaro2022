document.querySelector("#idbutton").addEventListener('click', Enroll);

// document.querySelector("#idbutton").addEventListener('click', ()=>{

// })
let EmailContainer = []
function Enroll(){
    
    let Email = document.getElementById("iduseremail").value
    console.log(Email)

    let studentexist= EmailContainer.filter((student)=>{
        return student === Email;
    })

    if(studentexist.length == 0){
        EmailContainer.push(Email)
        console.log(EmailContainer)

    //    let Enrollstatus = document.getElementById("status")
    //    console.log(Enrollstatus)
    //    Enrollstatus.classList.remove('d-none')
    //    Enrollstatus.innerHTML = 'You got Enroll Sucessfully'

         document.getElementById("status").classList.remove('d-none')
         document.getElementById("status").innerHTML = 'You got Enroll Sucessfully'
         setTimeout(()=>{
            document.getElementById("status").classList.add('d-none')
         },3000)

         document.getElementById("iduseremail").value = " "
    }
    else{
        document.getElementById("status").style.backgroundColor ='Red'
         document.getElementById("status").classList.remove('d-none')
         document.getElementById("status").innerHTML = 'Student Exist'
         setTimeout(()=>{
            document.getElementById("status").classList.add('d-none')
         },3000)
        }
}