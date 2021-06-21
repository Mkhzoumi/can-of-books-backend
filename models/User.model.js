'use strict'

const mongoose = require('mongoose')
const BookSchema = require('./Book.model')

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/


// Here we are creating a new schema obj, which will be used later on to generate the model
const userSchema = new mongoose.Schema({
    email: { type: String },
    Books: [BookSchema]

})

// generate the model based on the schema
const userModel = mongoose.model('user', userSchema)


const seedUserData = () => {
    const newUser = new userModel({
        emai: 'Haneenalwatan993@gmail.com',
        books: [{
            name: 'Java',
            description: 'test java',
            status: 'available',
        },
        {
            name: 'Html',
            description: 'test HTML',
            status: 'available',
        }
       
        ]

    })
newUser.save();

}

module.exports = userModel;