import express from 'express'
import { sequelize } from "../config/loadSequelize.js"
import { User } from '../models/User.js'

const router = express.Router()

// POST user
// @desc register user in DB with encripted password 
router.post("/", (req, res) => {
    sequelize.sync().then(() => {
        if (req.body.password == req.body.repeatpassword) {
            User.create({
                email: req.body.email,
                password: req.body.password
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