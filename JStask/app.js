let User = []
function AddUserName(){
   let Name = document.getElementById('add-user').value
   User.push(Name)
   let studentdiv = document.createElement('div')
   let studentname = document.createElement('h3')
   let parentdiv = document.getElementById('UserList')

   parentdiv.appendChild(studentdiv)
   studentdiv.appendChild(studentname)
   studentname.innerHTML = Name
   // document.getElementById('UserList').innerHTML = User
   
   document.getElementById('add-user').value = " "
   console.log (User)
   console.log(Name)

}

function SearchUserName(){
   let Name = document.getElementById('search-user').value
   console.log(Name)
   User.map(username =>{
      if (username === Name){
         document.getElementById('SearchList').innerHTML = Name + " is prsent in system"
         console.log("inside if")
      }
   })  

   // for(let i=0; i <= User.length ;i++){
   // if (User[i] === Name){
   //       document.getElementById('SearchList').innerHTML = Name + " is prsent in system"
   //       console.log("inside if")
   //    }
   // else {
   //    document.getElementById('SearchList').innerHTML = Name + " is not prsent in system"
   //    console.log("inside if")
   //    }
   // }
}

function Enroll(){
   document.getElementById('UserEnroll').classList.remove('EnrollementRemove')
    setTimeout(() => {
       document.getElementById('UserEnroll').classList.add('Enrollement')
   }, 3000);
}