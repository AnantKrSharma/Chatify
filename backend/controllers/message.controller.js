
export async function sendMessage(req, res){
    try{
        const {message} = req.body;
        const {id} = req.params;
        const senderId = req.userId;

        res.send();
    }
    catch(error){
        console.log("Error in the sendMessage controller - ", error.message);

        res.status(500).json({
            errors: "Error while sending message."
        })
    }
}
