const { DataTypes } = require('sequelize');
const uuid = require("uuid");

const sequelize = require("../configs/sequelize");

const progressSchema = sequelize.define('progress', {
    progress_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: () => {
            const uuidValue = uuid.v4();

            const uuidStr = uuidValue.replace(/-/g, '');

            const binaryData = Buffer.from(uuidStr, 'hex');

            return binaryData;
        }
    },
    attempt: {
        type: DataTypes.SMALLINT,
        unique: true,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.STRING(14),
        allowNull: false
    }
}, {
    tableName: "new_progress",
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

const Progress = sequelize.model("progress", progressSchema);

module.exports = Progress;
