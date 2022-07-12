document.getElementById('submitid').addEventListener('click', Enroll)

let StudentData = [ ]
function Enroll(){
    StudentData = [{ }]
    studentName = document.getElementById('nameid').value
    enrollNumber = document.getElementById('enrollid').value

    StudentData.name = studentName;
    StudentData.EnrollmentNumber = enrollNumber;


    StudentData.push[studentName]
    StudentData.push[enrollNumber]


    console.log(StudentData)

}