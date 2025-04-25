const { prisma } = require('../prisma/prisma-client');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (!email && !password) {
        return res.status(400).json({
            message: 'Please, fill required filds'
        })
    // } else {
    //     return res.status(200).json({
    //         message: 'login seccessfully'
    //     })
    }

    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    });

    const isPasswordCorrect = user && ( await bc)

}
const register = async (req, res) => {
    res.send('register');
}
const current = async (req, res) => {
    res.send('current');
}

module.exports = {
    login,
    register,
    current
}