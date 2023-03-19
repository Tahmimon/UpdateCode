const express = require("express");
const {
    getAllChats,
    createChat,
    addMessageToAChat,
    getMessagesById,
    replayToChat
} = require("../controllers/chatController");
const Message = require("../models/Message");

const router = express.Router();

// GET /chats - get all chats
router.get("/", getAllChats);

// POST / - create a new chat
router.post("/", createChat);

// GET //:id - get a chat by ID
router.get("/:conversationId/messages", getMessages, getMessagesById);

// POST //:id/messages - add a new message to a chat
// requset body example 
/**
 {
    "text":"Hello, I need help"
}
 */
router.post("/:conversationId/messages", addMessageToAChat);

router.post("/:conversationId/replay", replayToChat);

// middleware function to get a chat by ID
async function getMessages(req, res, next) {
    let chat;

    try {
        chat = await Message.find({ conversation_id: req.params.conversationId });
        if (chat == null) {
            return res.status(404).json({ message: "Messages not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.chat = chat;
    next();
}

module.exports = router;
