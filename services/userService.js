const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (user) => {
    if (user.username !== process.env.USERNAME_LOGIN || user.password !== process.env.PASSWORD_LOGIN) throw Error();

    const token = jwt.sign({ username: user.username }, process.env.PRIVATE_KEY, { expiresIn: '30min' });

    return token;
};

module.exports = { login };