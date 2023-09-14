const {Schema, model} = require ('mongoose');


const CourseSchema = Schema({

    location: {
        type: String,
        default: ''
    },

    speaker: {
        type: String,
        default: ''
    },

    subject: {
        type: String,
        default: ''
    },

    time: {
        type: String,
        default: ''
    }


    }, { timestamps:true}
    );

CourseSchema.methods.toJSON = function(){
    const {__v, password, ...course} = this.toObject();
 
    return course; 
}


module.exports= model('Course', CourseSchema);