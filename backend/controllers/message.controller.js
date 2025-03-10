import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]},
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message,
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }


        // await conversation.save();
        // await newMessage.save();

        //This will run in parallel (both will run at the same time)
        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET IO functionality will go here
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId) {
            // io.to(<socket_id>).emt() used to send events to a specific client
            io.to(receiverSocketId).emit("newMessage", newMessage);
            
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message );
        res.status(500).json({message: "Internal server error"});
    }
};

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};