import User from '../models/user.model.js'

export async function signup(req, res){
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            res.status(400).json({
                errors: "Passwords don't match."
            })
        }

        const found = await User.findOne({username});

        if(found){
            return res.status(400).json({
                errors: "User already exists."
            })
        }
        
        // HASH PASSWORD HERE

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const created = await User.create({
            fullName,
            username,
            password, 
            gender: gender.toLowerCase(),
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        res.status(201).json({
            _id: created._id,
            fullName: created.fullName,
            username: created.username,
            password: created.password,
            gender: created.gender,
            profilePic: created.profilePic 
        })
    } 
    
    catch(error){
        console.log("Error in signup controller", error.message);

        res.status(500).json({
            errors: "Error while creating new user."
        })
    }
}


export async function login(req, res){
    res.json({
        msg: "YO LOGIN ?" 
    })
}

export async function logout(req, res){
    res.json({
        msg: "YO LOGOUT ?"
    })
}
