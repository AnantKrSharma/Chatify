
import jwt from 'jsonwebtoken'

export function protectRoute(req, res, next){

    try{ 
        const token = req.cookies['jwt']

        const verify = jwt.sign(token, process.env.JWT_SECRET)


    }
    catch(error){
        console.log("Error in the protectRoute middlware - ", error.message);

        res.status(500).json({
            errors: "Error while authenticating the user."
        })
    }
}
