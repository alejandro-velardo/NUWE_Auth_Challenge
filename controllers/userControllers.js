import express from 'express'
import { sequelize } from "../config/loadSequelize.js"
import { User } from '../models/User.js'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { authError, authenticate } from './middleware.js'

const router = express.Router()

// POST user
// @desc REGISTER user in DB with encripted password 
router.post("/register", (req, res) => {
    const { password, repeatpassword } = req.body;

    sequelize.sync().then(() => {
        if (password && password == repeatpassword) {
            
            const hash = bcrypt.hashSync(req.body.password, 10)

            User.create({
                email: req.body.email,
                password: hash
            })
                .then((item) => {
                    res.status(200).json({
                         ok: true, 
                         data: item 
                    })
                })
                .catch((error) =>{ 
                    res.status(400).json({ 
                        ok: false, 
                        error: error.message 
                    })
                })
        } else {
            if (!password) {
                res.status(200).json({
                    ok: false,
                    error: "Password not provided"
                })
            } else {
                res.status(200).json({
                    ok: false,
                    error: "Passwords do not match"
                })
            }
            
        }


    })
})

// POST user
// @desc LOG IN user and return a token 
router.post("/login", (req, res) => {
    const response = {}
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            ok: false,
            error: "Email or password not received."
        });
    }

    sequelize.sync().then(() => {
       
        User.findOne({ where: { email } })
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                return user;
            } else {
                throw "Incorrect email or password.";
            }
        })
        .then(user => {
            response.ok = true
            response.token = jsonwebtoken.sign(
                {
                    expiredAt: new Date().getTime() + Number(process.env.EXPIRED_AFTER),
                    email: user.email,
                },
                process.env.SECRET_KEY
            )
            res.json(response)

        })
        .catch(err => res.status(400).json({
            ok: false,
            error: err
        }))


    })
})

router.get("/protected", [authenticate, authError], (req, res) => {
    res.status(200).json({
        ok: true,
        message: "This is a protected route."
    })
})


export default router