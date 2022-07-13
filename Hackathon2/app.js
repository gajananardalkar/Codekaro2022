document.getElementById('submitid').addEventListener('click', Enroll)

let StudentName = [ ]
let EnrollNumber = [ ]


function Enroll(){
    let Name = document.getElementById('nameid').value
    let SrNumber = document.getElementById('enrollid').value


    let emptyarray = EnrollNumber.filter((number)=>{
       return number == SrNumber
    })

    if(emptyarray == SrNumber ){
        console.log("Enrollment number is registered Please try new number")
    }else{
        StudentName.push(Name)
        EnrollNumber.push(SrNumber)
        console.log("Student is sucessfully Enrolled")

    }
    console.log(StudentName)
    console.log(EnrollNumber)

    document.getElementById('enrollid').value = ' '
    document.getElementById('nameid').value = ' '
    
}
