// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



// const id = ObjectID()
// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())



MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)

    db.collection('apps').deleteOne({
        // completed: false
        description: 'Task Manager app'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteMany({
    //     // completed: false
    //     age: 59
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('apps').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    //     // console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60c4c2d1e3cbed2b88113d7b")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60c4c2d1e3cbed2b88113d7b")
    // }, {
    //     $set: {
    //         name: 'Saurabh'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("60c4c2d1e3cbed2b88113d7b")
    // }, {
    //     $set: {
    //         name: 'Saurabh'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('apps').findOne({_id: new ObjectID("60c4c7a6484bc12030f71ede")}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('apps').find({ completed: true }).toArray((error, apps) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(apps)
    // })

    // db.collection('users').findOne({_id: new ObjectID("60c4c57ba8dae34530dc4d12")}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     // console.log(user)
    // })

    // db.collection('users').find({ name: 'Visnu'}).toArray((error, users) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({ name: 'Visnu'}).count((error, count) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(count)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Prem',
    //     age: 59
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Akash',
    //         age: 22
    //     }, {
    //         name: 'Honey',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('apps').insertMany([
    //     {
    //         description: 'Weather app',
    //         completed: true
    //     }, {
    //         description: 'Notes app',
    //         completed: true
    //     }, {
    //         description: 'Task Manager app',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })
})