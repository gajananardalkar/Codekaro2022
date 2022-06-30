document.getElementById('rolebutton').addEventListener('click', role)

let numbers = [1,2,3,4,5,6]

function role(){
    document.getElementById('dicenumber').innerHTML = " " 
    document.getElementById('dicenumber').classList.add('dice-rotation')
    setTimeout(()=>{
        document.getElementById('dicenumber').classList.remove('dice-rotation')
        let randomnumber = Math.floor(Math.random()*6)+1;
        document.getElementById('dicenumber').innerHTML =randomnumber 
    },800)
}