const { binToUuid } = require("./conversor");

const progressIdToUuid = (progressItem) => {
    const reformedProgress = { ...progressItem.dataValues, progressId: binToUuid(progressItem.progress_id) };

    delete reformedProgress.progress_id;

    const horarioBrasilia = new Date(parseInt(reformedProgress.timestamp) - 3 * 1000 * 60 * 60);

    reformedProgress.date = horarioBrasilia;

    return reformedProgress;
};

const orderByAttempt = (progressArr) => {
    return progressArr.sort((progressA, progressB) => progressA.attempt - progressB.attempt);
}

module.exports = { progressIdToUuid, orderByAttempt }