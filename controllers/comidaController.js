const comidaModel = require('../models/comidaModel');
const comidaValidator = require('../validators/comidaValidator');

const getAll = async (req, res) => {
    try {
        return res.status(200).json(await comidaModel.getAll());
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getOne = async (req, res) => {
    try {
        return res.status(200).json(await comidaModel.getOne(req.params.comida_id));
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const post = async (req, res) => {
    try {
        const value = comidaValidator.createComida(req.body);
        await comidaModel.post(value);

        res.status(201).json({message: "CREATED"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const put = async (req, res) => {
    try {
        const value = comidaValidator.updateComida(req.body);
        await comidaModel.put(req.params.comida_id, value);

        return res.status(200).json({message: "UPDATED"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const del = async (req, res) => {
    try {
        await comidaModel.del(req.params.comida_id);
        
        return res.status(200).json({message: "DELETED"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    del
};