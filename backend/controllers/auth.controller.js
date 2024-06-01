
export async function signup(req, res){
    try{
        const {yo} = await req.body;
    
        res.json({
            msg: `${yo}UUUU`
        })
    }
    catch(error){
        res.json({
            msg:"Sorry, fucked."
        })
        console.log(error);
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
