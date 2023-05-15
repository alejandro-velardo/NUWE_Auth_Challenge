import express from 'express'
import { sequelize } from "../config/loadSequelize.js"
import { User } from '../models/User.js'
import bcrypt from 'bcrypt';

const router = express.Router()

// POST user
// @desc register user in DB with encripted password 
router.post("/register", (req, res) => {
    sequelize.sync().then(() => {
        if (req.body.password == req.body.repeatpassword) {
            
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
            res.status(200).json({
                ok: false,
                error: "Passwords do not match"
            })
        }


    })
})


export default router