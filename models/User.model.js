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
        email: 'zx.hammam@gmail.com',
        Books: [{
            name: 'Java',
            description: 'test java',
            status: 'available',
        },
        {
            name: 'Html',
            description: 'test HTML',
            status: 'available',
        },
        {
            name: 'python',
            description: 'test test',
            status: 'available',
        }]
    
    });
    newUser.save();
    console.log(newUser);

}


module.exports = userModel;
// module.exports = seedUserData;