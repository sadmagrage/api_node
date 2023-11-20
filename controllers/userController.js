const userService = require("../services/userService");

const login = (req, res) => {
    try {
        const token = userService.login(req.body);
        
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json("Error");
    }
};

module.exports = { login }