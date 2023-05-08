const { db } = require('../config/mysql');

const getAll = async () => {
    const [rows, fields] = await db.execute('SELECT BIN_TO_UUID(comida_id) comida_id, nome, carb, protl, proth, fat, img FROM comida;');
    return rows;
}

const getOne = async (comida_id) => {
    const [rows, fields] = await db.execute('SELECT BIN_TO_UUID(comida_id) comida_id, nome, carb, protl, proth, fat, img FROM comida WHERE BIN_TO_UUID(comida_id) = ?;', [comida_id]);
    return rows[0];
}

const post = async (comidaDto) => {
    const [result] = await db.execute('INSERT INTO comida (comida_id, nome, carb, protl, proth, fat, img) VALUES (UUID_TO_BIN(UUID()), ?, ?, ?, ?, ?, ?);', [comidaDto.nome, comidaDto.carb, comidaDto.protl, comidaDto.proth, comidaDto.fat, comidaDto.img]);
    return result;
}

const put = async (comida_id, comidaDto) => {
    query = "UPDATE comida set";
    params = [];

    Object.keys(comidaDto).map(key => {
        if (key == "quantidade" || comidaDto[key] == null) return;

        query += ` ${key} = ?,`;

        params.push(comidaDto[key]);
    });

    query = query.substring(0, query.length - 1) + " WHERE BIN_TO_UUID(comida_id) = ?;";
    params.push(comida_id);

    const [result] = await db.execute(query, params);
}

const del = async (comida_id) => {
    const [result] = await db.execute('DELETE FROM comida WHERE BIN_TO_UUID(comida_id) = ?;', [comida_id]);
    return result;
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    del
}