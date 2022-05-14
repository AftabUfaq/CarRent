import mongoose from 'mongoose';
const vechileSchema = new  mongoose.Schema({
    name:   {
        type: String,
        required:true
    },
    make: {
        type: String,
        required:true
    },
    modal: {
        type: String,
        required:true
    },
    color: {
        type: String,
        required:true
    },
    userid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true
	},


});

module.exports = mongoose.model('vehicle', vechileSchema);