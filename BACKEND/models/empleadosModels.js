import mongoose from 'mongoose';


const schema = mongoose.Schema;

const empleadoSchema = new schema({
    codigo: {
        type: Number,
        required: true,  
        unique: true      
    },
    nombre: {
        type: String,
        required: true
    },
    apellido1: {
        type: String,
        required: true
    },
    apellido2: {
        type: String
    },
    codigo_departamento: {
        type: Number,
        required: true
    }
});


export const empleado = mongoose.model('Empleado', empleadoSchema);