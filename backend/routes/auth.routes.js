import express from "express";

const router = express.Router();

router.get('/login', (req, res)=>{
    res.json({
        msg: "FUCKER LOGIN ??"
    })
})

export default router;
