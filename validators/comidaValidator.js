const Joi = require('joi');

const postComida = Joi.object({
    nome: Joi.string().required(),
    quantidade: Joi.number().integer().required(),
    carb: Joi.number().default(0),
    protl: Joi.number().default(0),
    proth: Joi.number().default(0),
    fat: Joi.number().default(0),
    img: Joi.string().default("")
});

const createComida = (params) => {
    const { error, value } = postComida.validate(params);

    Object.keys(params).map(item => {
        if (typeof(params[item]) == 'number') value[item] = params[item]/params["quantidade"];
    });

    if (error) throw error;
    return value;
};

const updateComida = (params) => {
    let updateComida;

    if ("carb" in params || "protl" in params || "proth" in params || "fat" in params) {
        updateComida = Joi.object().keys({
            nome: Joi.string(),
            carb: Joi.number(),
            protl: Joi.number(),
            proth: Joi.number(),
            fat: Joi.number(),
            quantidade: Joi.number().integer().required(),
            img: Joi.string()
        });

        const { error, value} = updateComida.validate(params);

        if (error) throw error;

        Object.keys(params).map(item => {
            if (typeof(params[item]) == 'number') value[item] = params[item]/params["quantidade"];
        });
        return value;
    }
    
    updateComida = Joi.object().keys({
        nome: Joi.string(),
        img: Joi.string()
    });

    const { error, value} = updateComida.validate(params);
    if (error) throw error;

    return value;
}

module.exports = {
    createComida,
    updateComida
}