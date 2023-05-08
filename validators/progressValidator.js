const Joi = require('joi');

const create = Joi.object({
    nome: Joi.string().required(),
    ano: Joi.number().integer().positive().required(),
    mes: Joi.number().integer().min(1).max(12).required(),
    dia: Joi.number().integer().min(1).max(31).required(),
    hora: Joi.number().integer().min(0).max(23).default(0),
    minuto: Joi.number().integer().min(0).max(59).default(0),
    segundo: Joi.number().integer().min(0).max(59).default(0)
});

const update = Joi.object({
    nome: Joi.string(),
    ano: Joi.number().integer().positive(),
    mes: Joi.number().integer().min(1).max(12),
    dia: Joi.number().integer().min(1).max(31),
    hora: Joi.number().integer().min(0).max(23),
    minuto: Joi.number().integer().min(0).max(59),
    segundo: Joi.number().integer().min(0).max(59)
});

const createProgress = (params) => {
    const { error, value } = create.validate(params);
    
    if (error) throw error;
    return value
}

const updateProgress = (params) => {
    const { error, value } = update.validate(params);

    if (error) throw error;
    return value;
}

module.exports = {
    createProgress,
    updateProgress
}