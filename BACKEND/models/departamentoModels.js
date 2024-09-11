import mongoose from 'mongoose';


const schema = mongoose.Schema;

const departamentoSchema = new schema({
    codigo: {
        type: Number,
        required: true,  
        unique: true      
   
    }
});


export const departamento = mongoose.model('Departamento', departamentoSchema);