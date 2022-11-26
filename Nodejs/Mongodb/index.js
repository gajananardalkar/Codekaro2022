const express = require('express')
const app = express()
const mongoose  = require('mongoose')
mongoose.connect('mongodb+srv://GajananArdalkar:qwer1234@cluster0.apl9aaa.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connected");
})

app.listen(3000, ()=>{
    console.log('connect 3000')
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: Number,
})
const createUser = async ()=>{
    const User= mongoose.model('users', userSchema)
    let data = new User({
        name:'navin',
        email:'navin@gmail.com',
        contact: 95563215884
    })
    const result = await data.save()
    console.log(result)
}
// createUser();

const deleteUser = async ()=>{
    const User = mongoose.model('users', userSchema)
    let data = await User.deleteOne({name: 'navin'})
    console.log(data)
}
// deleteUser();

const findUser = async ()=>{
    const User = mongoose.model('users', userSchema)
    let data = await User.find({name: 'Gajanan'})
    console.log(data)
}
// findUser();

const updateUser = async ()=>{
    const User = mongoose.model('users', userSchema)
    let data = await User.updateOne(
        {name: 'Gajanan'},
        {$set:{name:'Gajanan Ardalkar'}}
        
        )
    console.log(data)
}
updateUser()

