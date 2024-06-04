import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export async function sendMessage(req, res){
    try{
        const { message } = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all:[
                    receiverId, senderId
                ]
            }
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [receiverId, senderId]
            }) 
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
           await Conversation.updateOne({_id: conversation._id}, 
            {
                $push:{
                    messages: newMessage._id
                }
            })
        }

        res.status(201).json({
            newMessage
        });
    }
    catch(error){
        console.log("Error in the sendMessage controller - ", error.message);

        res.status(500).json({
            errors: "Error while sending message."
        })
    }
}
