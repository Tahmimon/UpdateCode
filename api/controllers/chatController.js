//Import the Conversation & Message models
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

//Get all conversations
const getAllChats = async (req, res) => {
    try {
        const chats = await Conversation.find();
        res.json(chats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Create a new conversation and a message
const createChat = async (req, res) => {

    const chat = new Conversation({
        creator: "visitor",
        participant: "admin"
    });

    try {
        // Save the conversation
        const newChat = await chat.save();
        // Create a new message associated with the new conversation
        const newMessage = new Message({
            conversation_id: newChat._id,
            sender: "admin",
            receiver: "visitor",
            text: "Hey! How can I help you?",
            isAdminSeen: true
        });
        // Save the message
        const message = await newMessage.save()
        // emit a 'newChat' event with the new chat data to all connected clients
        // io.emit('newChat', newChat);

        //Return the newly created message
        res.status(201).json(message);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Middleware function to retrieve a conversation by id
const getMessagesById = (req, res) => {
    res.json(res.chat);
}

// Add a new message to a conversation
const addMessageToAChat = async (req, res) => {
    const message = {
        conversation_id: req.params.conversationId,
        text: req.body?.text,
        attachment: req.body?.attachment,
        sender: "visitor",
        receiver: "admin",
        isVisitorSeen: true
    };
    try {
        // Create a new message with the given message data
        const newMessage = new Message(message);
        // Save the message
        const msg = await newMessage.save()

        // emit a 'newMessage' event with the new message data to all connected clients
        io.emit('newMessage', msg);
        //Return the newly created message
        res.status(201).json(msg);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Add a new message to a conversation as an admin
const replayToChat = async (req, res) => {
    const message = {
        conversation_id: req.params.conversationId,
        text: req.body.text,
        sender: "admin",
        receiver: "visitor",
        isAdminSeen: true
    };
    try {
        // Create a new message with the given message data
        const newMessage = new Message(message);
        // Save the message
        const msg = await newMessage.save()

        // emit a 'newMessage' event with the new message data to all connected clients
        io.emit('newMessage', msg);
        // Return the newly created message
        res.status(201).json(msg);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllChats,
    createChat,
    getMessagesById,
    addMessageToAChat,
    replayToChat
}