const{Schema,model} = require('mongoose');
const mensajeSchema = Schema({
        de:{
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        para:{
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        mensaje:{
            type: String,
            required: true
        }
},{
    timestamps:true
});

mensajeSchema.method('toJSON',function(){
    const{__v,...object}=this.toObject();
    object.uid = _id;
    return object;
}); 
module.exports = model('Mensaje',mensajeSchema);