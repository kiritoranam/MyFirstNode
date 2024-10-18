const mongoose = require('mongoose');

const addSchema = new mongoose.Schema({
    city: { type: String },
    state: { type: String },
    postal: { type: Number },
    _id: false
})

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: ["This field is very much required"]
    },
    role: { type: String },
    add: [addSchema],
},
    {
        virtuals: {
            fullName: {
                get() {
                    return this.name + ' ' + this.role;
                }
            }
        }
    })

const TestSchema = new mongoose.model('TestMongoose', schema)

module.exports = TestSchema