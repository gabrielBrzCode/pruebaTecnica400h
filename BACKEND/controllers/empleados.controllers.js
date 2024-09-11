import { empleado } from "../models/empleadosModels";
// Crear un nuevo empleado
export const crearEmpleado = async (req, res) => {
    try {
        const empleado = new Empleado(req.body);
        await empleado.save();
        res.status(201).json(empleado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await empleado.find();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un empleado por ID
export const obtenerEmpleadoPorId = async (req, res) => {
    try {
        const empleado = await empleado.findById(req.params.id);
        if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un empleado por ID
export const actualizarEmpleado = async (req, res) => {
    try {
        const empleado = await empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
        res.status(200).json(empleado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un empleado por ID
export const eliminarEmpleado = async (req, res) => {
    try {
        const empleado = await empleado.findByIdAndDelete(req.params.id);
        if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
        res.status(200).json({ message: 'Empleado eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};