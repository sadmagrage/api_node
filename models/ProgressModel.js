const { DataTypes, Model, Sequelize } = require('sequelize');
const { sequelize } = require('../config/sequelize');

class ProgressModel extends Model {}

ProgressModel.init({
        progress_id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dia: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hora: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        minuto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        segundo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: "ProgressModel",
        tableName: "progress"
    }
)

module.exports = ProgressModel;