
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

export default async function protectRoute(req, res, next){

    const token = req.cookies['username']
    console.log(token);
}