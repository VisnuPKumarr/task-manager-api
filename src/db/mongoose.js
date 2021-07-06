const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String, 
//         required: true,
//         trim: true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minLength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password'))
//             {
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     }
// })

// const me = new User({
//     name: ' Visnu ',
//     email: 'visnu.pk@gmail.com',
//     password: "visnupk"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const weather = new Task({
//     description: "Weather application",
//     completed: true
// })

// weather.save().then(() => {
//     console.log(weather)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const bro = new User({
//     name: 'Akash',
//     age: 24
// })

// bro.save().then(() => {
//     console.log(bro)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const me = new User({
//     name: 'Visnu',
//     age: 23
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })