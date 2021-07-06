const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


























// const express = require('express')
// require('./db/mongoose')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

// const app = express()
// const port = process.env.PORT || 3000

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })
// // const errorMiddleware = (req, res, next) => {
// //     throw new Error('From my middleware')
// // }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

// // app.post('/upload', errorMiddleware, (req, res) => {
// //     res.send()
// // }, (error, req, res, next) => {
// //     res.status(400).send({ error: error.message})
// // })

// // app.post('/upload', upload.single('upload'), (req, res) => {
// //     res.send()
// // })

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })


// // app.use((req, res, next) => {
// //     if (req.method === 'GET') {
// //         res.send('GET requests are disabled')
// //     } else {
// //         next()
// //     }
// // })

// // app.use((req, res, next) => {
// //     res.status(503).send('Site under maintainence')
// // })

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })


// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('60d707288290a02ea0b49167')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('60d7065c1d00de1ac065a5cf')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

// const pet = {
//     name: 'Jimmy'
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))


// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'ghhgjhfgjh' }, 'thisismynewcourse', { expiresIn: '7 days'})
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)

//     // const password = 'visnu@123!'
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare('visnu@123!', hashedPassword)
//     // console.log(isMatch)
// }

// myFunction()





// const express = require('express')
// require('./db/mongoose')
// // const User = require('./models/user')
// // const Task = require('./models/task')
// const userRouter = require('./routers/user')

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())
// app.use(userRouter)
// // const router = new express.Router()
// // router.get('/test', (req, res) => {
// //     res.send('This is from my other router')
// // })
// // app.use(router)

// // app.post('/users', async (req, res) => {
// //     const user = new User(req.body)
// //     try{
// //         await user.save()
// //         res.status(201).send(user)
// //     } catch (e) {
// //         res.status(400).send(e)
// //     }
// // })

// // app.get('/users', async (req, res) => {
// //     try {
// //         const users = await User.find({})
// //         res.send(users)
// //     } catch (e) {
// //         res.status(500).send(e)
// //     }
// // })

// // app.get('/users/:id', async (req, res) => {
// //     const _id = req.params.id
// //     try {
// //         const user = await User.findById(_id)
// //         if (!user){
// //             return res.status(404).send()
// //         }
// //         res.send(user)
// //     } catch (e) {
// //         res.status(500).send(e)
// //     }
// // })

// // app.patch('/users/:id', async (req, res) => {
// //     const updates = Object.keys(req.body)
// //     const allowedUpdates = [ 'name', 'email', 'password', 'age' ]
// //     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
// //     if (!isValidOperation) {
// //         return res.status(400).send({error: 'Invalid updates!'})
// //     }
// //     try {
// //         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
// //         if (!user){
// //             return res.status(404).send()
// //         }
// //         res.send(user)
// //     } catch(e) {
// //         res.status(500).send(e)
// //     }
// // })

// // app.delete('/users/:id', async (req, res) => {
// //     try {
// //         const user = await User.findByIdAndDelete(req.params.id)
// //         if (!user){
// //             return res.status(404).send()
// //         }
// //         res.send(user)
// //     } catch(e) {
// //         res.status(500).send(e)
// //     }
// // })

// // app.post('/tasks', async (req, res) => {
// //     const task = new Task(req.body)
// //     try{
// //         await task.save()
// //         res.status(201).send(task)
// //     } catch (e) {
// //         res.status(400).send(e)
// //     }
// // })

// // app.get('/tasks', async (req, res) => {
// //     try {
// //         const tasks = await Task.find({})
// //         res.send(tasks)
// //     } catch (e) {
// //         res.status(500).send(e)
// //     }
// // })

// // app.get('/tasks/:id', async (req, res) => {
// //     const _id = req.params.id
// //     try {
// //         const task = await Task.findById(_id)
// //         if (!task){
// //             return res.status(404).send()
// //         }
// //         res.send(task)
// //     } catch (e) {
// //         res.status(500).send(e)
// //     }
// // })

// // app.patch('/tasks/:id', async (req, res) => {
// //     const updates = Object.keys(req.body)
// //     const allowedUpdates = [ 'description', 'completed' ]
// //     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
// //     if (!isValidOperation) {
// //         return res.status(400).send({error: 'Invalid updates!'})
// //     }
// //     try {
// //         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
// //         if (!task){
// //             return res.status(404).send()
// //         }
// //         res.send(task)
// //     } catch(e) {
// //         res.status(500).send(e)
// //     }
// // })

// // app.delete('/tasks/:id', async (req, res) => {
// //     try {
// //         const task = await Task.findByIdAndDelete(req.params.id)
// //         if (!task){
// //             return res.status(404).send()
// //         }
// //         res.send(task)
// //     } catch(e) {
// //         res.status(500).send(e)
// //     }
// // })

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })











// const express = require('express')
// require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())

// app.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try{
//         await user.save()
//         res.status(201).send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }

//     // user.save().then(() => {
//     //     res.send(user)
//     // }).catch((e) => {
//     //     res.status(400).send(e)
//     // })
// })

// app.get('/users', async (req, res) => {
//     // User.find({ name: 'Andrew' })

//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (e) {
//         res.status(500).send(e)
//     }

//     // User.find({}).then((users) => {
//     //     res.send(users)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)
//         if (!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(500).send(e)
//     }

//     // User.findById(_id).then((users) => {
//     //     if (!users){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(users)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.post('/tasks', async (req, res) => {
//     const task = new Task(req.body)

//     try{
//         await task.save()
//         res.status(201).send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }

//     // task.save().then(() => {
//     //     res.status(201).send(task)
//     // }).catch((e) => {
//     //     res.status(400).send(e)
//     // })
// })

// app.get('/tasks', async (req, res) => {

//     try {
//         const tasks = await Task.find({})
//         res.send(tasks)
//     } catch (e) {
//         res.status(500).send(e)
//     }

//     // Task.find({}).then((tasks) => {
//     //     res.send(tasks)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.get('/tasks/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const task = await Task.findById(_id)
//         if (!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     } catch (e) {
//         res.status(500).send(e)
//     }

//     // Task.findById(_id).then((tasks) => {
//     //     if (!tasks){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(tasks)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })

