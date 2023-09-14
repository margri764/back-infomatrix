const {Schema, model} = require ('mongoose');


const InscriptionSchema = Schema({

    firstName:  {
        type: String,
        default:'',
    },

    lastName:  {
        type: String,
        default:'',
    },

    student:{
        type: Boolean,
        default: false,
    },

    teacher:{
        type: Boolean,
        default: false,
    },

    inscription:[{
        type: Schema.Types.ObjectId,
        ref: "Course",
    }],

    }, { timestamps:true}
    );

InscriptionSchema.methods.toJSON = function(){
    const {__v, password,  user_login, ...inscription} = this.toObject();
    // const {__v,password,_id,...usuario} = this.toObject();
    // usuario.uid= _id;
    return inscription; 
}


module.exports= model('Inscription', InscriptionSchema);