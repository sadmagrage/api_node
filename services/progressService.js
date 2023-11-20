const jwt = require("jsonwebtoken");
require("dotenv").config();

const CustomError = require("../errors/CustomError");
const Progress = require("../models/ProgressModel");
const { uuidToBin } = require("../utils/conversor");
const progressUtils = require("../utils/progressUtils");

const getAll = async () => {
    const progress = await Progress.findAll();

    const newProgressArr = progress.map(progressUtils.progressIdToUuid);

    return progressUtils.orderByAttempt(newProgressArr);
};

const getLast = async () => {
    const progress = await Progress.findOne({ order: [['attempt', 'DESC']] });

    return progressUtils.progressIdToUuid(progress);
}

const getOne = async (query) => {
    const whereCondition = {};

    if (query.progress_id) whereCondition.progress_id = uuidToBin(query.progress_id);
    if (query.attempt) whereCondition.attempt = query.attempt;
    if (query.timestamp) whereCondition.timestamp = query.timestamp;

    const progress = await Progress.findOne({ where: whereCondition });

    if (!progress) throw CustomError("Progress not found", 404);

    return progressUtils.progressIdToUuid(progress);
};

const save = async (progressDto, token) => {
    const { username } = jwt.verify(token, process.env.PRIVATE_KEY);

    if (username !== process.env.USERNAME_LOGIN) throw new Error();

    const progress = await Progress.create({ ...progressDto });

    return progressUtils.progressIdToUuid(progress);
};

const update = async (progressDto, token) => {
    const { username } = jwt.verify(token, process.env.PRIVATE_KEY);

    if (username !== process.env.USERNAME_LOGIN) throw new Error();

    const progress = await Progress.findOne({ where: { progress_id: uuidToBin(progressDto.progressId) } });

    if (!progress) throw CustomError("Progress not found", 404);

    await Progress.update(progressDto, { where: { progress_id: progress.progress_id } });

    const updatedProgress = await Progress.findOne({ where: { progress_id: progress.progress_id } });

    return progressUtils.progressIdToUuid(updatedProgress);
};

const del = async (progressId, token) => {
    const { username } = jwt.verify(token, process.env.PRIVATE_KEY);

    if (username !== process.env.USERNAME_LOGIN) throw new Error();

    const progress = await Progress.findOne({ where: { progress_id: uuidToBin(progressId) } });

    if (!progress) throw CustomError("Progress not found", 404);

    await Progress.destroy({ where: { progress_id: uuidToBin(progressId) } });
};

module.exports = { getAll, getLast, getOne, save, update, del };
