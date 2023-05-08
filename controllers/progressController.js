const { sequelize } = require('../config/sequelize');
const progressModel = require('../models/ProgressModel');
const progressValidator = require('../validators/progressValidator');

const getAll = async (req, res) => {
    try {
        const data = await progressModel.findAll();

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const getOne = async (req, res) => {
    try {
        const data = await progressModel.findOne({
            where: {
                progress_id: req.params.progress_id
            }
        });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const post = async (req, res) => {
    try {
        const value = progressValidator.createProgress(req.body);
        await progressModel.create(value);

        return res.status(201).json("CREATED");
    } catch (error) {
        return res.status(500).json(error.message)
    }
};

const put = async (req, res) => {
    try {
        const value = progressValidator.updateProgress(req.body);

        await progressModel.update(value, {
            where: {
                progress_id: req.params.progress_id
            }
        });
        return res.status(200).json("UPDATED");
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const del = async(req, res) => {
    try {
        await progressModel.destroy({
            where: {
                progress_id: req.params.progress_id
            }
        });
        return res.status(200).json('DELETED');
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    del
};