const { binToUuid } = require("./conversor");

const progressIdToUuid = (progressItem) => {
    const reformedProgress = { ...progressItem.dataValues, progressId: binToUuid(progressItem.progress_id) };

    delete reformedProgress.progress_id;

    reformedProgress.date = new Date(parseInt(reformedProgress.timestamp));

    return reformedProgress;
};

const orderByAttempt = (progressArr) => {
    return progressArr.sort((progressA, progressB) => progressA.attempt - progressB.attempt);
}

module.exports = { progressIdToUuid, orderByAttempt }
