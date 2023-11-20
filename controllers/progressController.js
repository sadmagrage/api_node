const CustomError = require('../errors/CustomError');
const progressService = require('../services/progressService');

const getAll = async (req, res) => {
    try {
        const progress = await progressService.getAll();

        res.status(200).json(progress);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.status).json(error.message);
            return;
        }
        res.status(500).json(error.message);
    }
};

const getOne = async (req, res) => {
    try {
        const progress = await progressService.getOne(req.query);

        res.status(200).json(progress);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.status).json(error.message);
            return;
        }
        res.status(500).json(error.message);
    }
};

const getLast = async (req, res) => {
    try {
        const progress = await progressService.getLast();

        res.status(200).json(progress);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.status).json(error.message);
            return;
        }
        res.status(500).json(error.message);
    }
};

const post = async (req, res) => {
    try {
        const progress = await progressService.save(req.body, req.header('Authorization'));

        res.status(201).json(progress);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.status).json(error.message);
            return;
        }
        res.status(500).json(error.message);
    }
};

const put = async (req, res) => {
    try {
        const progress = await progressService.update(req.body, req.header('Authorization'));

        res.status(200).json(progress);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.status).json(error.message);
            return;
        }
        res.status(500).json(error.message);
    }
};

const del = async(req, res) => {
    try {
        await progressService.del(req.params.progressId, req.header('Authorization'));

        res.status(200).json("Progress deletado");
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.status).json(error.message);
            return;
        }
        res.status(500).json(error.message);
    }
};

module.exports = { getAll, getOne, getLast, post, put, del };
