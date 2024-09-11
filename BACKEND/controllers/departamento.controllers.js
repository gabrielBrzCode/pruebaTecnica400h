import { departamento } from "../models/departamentoModels";

// Crear un nuevo departamento
export const crearDepartamento = async (req, res) => {
    try {
        const departamento = new departamento(req.body);
        await departamento.save();
        res.status(201).json(departamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los departamentos
export const obtenerDepartamentos = async (req, res) => {
    try {
        const departamentos = await departamento.find();
        res.status(200).json(departamentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un departamento por ID
export const obtenerDepartamentoPorId = async (req, res) => {
    try {
        const departamento = await departamento.findById(req.params.id);
        if (!departamento) return res.status(404).json({ error: 'Departamento no encontrado' });
        res.status(200).json(departamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un departamento por ID
export const actualizarDepartamento = async (req, res) => {
    try {
        const departamento = await departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!departamento) return res.status(404).json({ error: 'Departamento no encontrado' });
        res.status(200).json(departamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un departamento por ID
export const eliminarDepartamento = async (req, res) => {
    try {
        const departamento = await departamento.findByIdAndDelete(req.params.id);
        if (!departamento) return res.status(404).json({ error: 'Departamento no encontrado' });
        res.status(200).json({ message: 'Departamento eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};