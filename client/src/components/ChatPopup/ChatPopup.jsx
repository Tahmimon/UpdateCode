import { useEffect, useRef, useState } from "react";
import * as React from 'react';
import { FaComments } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { AiOutlineCloseCircle, AiOutlineSend } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import ImageViewModal from "./ImageViewModal"
import axios from "axios"
import { io } from "socket.io-client";
import moment from "moment/moment";

const socket = io("http://localhost:8800")

// const data = [
//   { name: "DotpotiT", message: "Hi there!", timestamp: "11:30 AM" },
//   { name: "DotpotiT", message: "Hey John, how are you?", timestamp: "11:35 AM" },
//   { name: "DotpotiT", message: "I'm good, thanks! How about you?", timestamp: "11:37 AM" },
//   { name: "DotpotiT", message: "I'm doing well too. Thanks for asking!", timestamp: "11:40 AM" },
// ];

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [files, setFiles] = useState(null);
  const messagesEndRef = useRef(null);
  const [error, setError] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [openModal, setOpenModal] = useState(null)
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages, isOpen]);

  useEffect(() => {
    // listen event for new message
    socket.on("newMessage", data => {
      console.log(data)
      const conversationId = localStorage.getItem("conversation_id")
      if (conversationId === data.conversation_id && data.sender === "admin") {
        setMessages(prev => ([...prev, data]))
      }
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    })
  }, [])

  useEffect(() => {
    if (files !== null) {
      handleSendMessage()
    }
  }, [files]);

  const handleOpen = async () => {
    const conversationId = localStorage.getItem("conversation_id")
    if (conversationId && messages.length === 0) {
      const { data } = await axios.get(`http://localhost:8800/api/chats/${conversationId}/messages`)
      setMessages(data)
    } if (!conversationId) {
      const { data } = await axios.post("http://localhost:8800/api/chats")
      localStorage.setItem("conversation_id", data.conversation_id)
      setMessages(prev => [...prev, data])
    }
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = async () => {
    setError("")
    setIsSending(true)
    const conversationId = localStorage.getItem("conversation_id")
    let attachment = null;

    try {
      if (files) {
        // if files selected then upload file to server and get file name
        const filesArray = Array.from(files);
        const formData = new FormData();
        filesArray.forEach(file => {
          formData.append('files[]', file);
        });
        const { data: resFiles } = await axios.post("http://localhost:8800/api/upload", formData)
        attachment = resFiles[0].filename;
        setFiles(null)

      }
      if (newMessage !== "" || attachment !== null) {
        const { data } = await axios.post(`http://localhost:8800/api/chats/${conversationId}/messages`, { text: newMessage, attachment: attachment })
        console.log(data)
        setMessages([...messages, data])
        setNewMessage("");
      }
      setIsSending(false)
    } catch (error) {
      console.log("error.response", error.response)
      if (error.response?.data?.errors?.msg) {
        setError(error.response.data.errors.msg)
      } else {
        setError(error.message)
      }
      setIsSending(false)
    }
  };

  const handleModalOpen = (image) => {
    setSelectedImage(image);
    setOpenModal(true)
  }

  return (
    <>
      {selectedImage && <ImageViewModal selectedImage={selectedImage} openModal={openModal} setOpenModal={setOpenModal} />}

      <button
        className="group fixed z-1 bottom-4 right-4 bg-primary-500 text-white p-4 rounded-full border border-white hover:scale-110 transition-all"
        onClick={handleOpen}
      >
        <FaComments size={24} />
        <span className="absolute top-2 right-16 group-hover:block w-[max-content] px-3 py-2 bg-primary-500 text-white hidden rounded border">Chat with us</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-[10vh] right-2 bg-white border-t border-gray-300 w-80 max-h-100 rounded-xl overflow-hidden shadow-xl transition-all">

          <div className="flex justify-between px-4 py-1.5 border-b bg-primary-400 text-white">
            <h2 className="text-lg font-medium">DotpotiT</h2>
            <button className="text-white text-3xl" onClick={handleClose}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="flex flex-col p-4 h-64 overflow-y-auto " >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg my-2 ${message.sender === "visitor" ? "bg-primary-200 text-white self-end" : "bg-gray-200"
                  }`}
              >
                <p className="font-medium">{message.sender === "visitor" ? "You" : 'DotpotiT'}</p>
                {message.text && <p>{message.text}</p>}
                {(message.attachment && message.attachment?.includes(".pdf"))
                  ? <a className="flex items-center gap-2" href={`http://localhost:8800/uploads/conversation/${message.attachment}`} download>
                    <HiOutlineDownload />
                    {message.attachment?.slice(0, 20)}...</a>
                  : message.attachment && <img onClick={() => handleModalOpen(`http://localhost:8800/uploads/conversation/${message.attachment}`)} className="w-40 cursor-pointer" src={`http://localhost:8800/uploads/conversation/${message.attachment}`} alt="" />}
                <p className="text-xs text-gray-500 mt-1">{moment(new Date(message.createdAt)).fromNow()}</p>
              </div>
            ))}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 flex items-center justify-between gap-1">
            <label htmlFor="attachment">
              <GrAttachment />
            </label>
            <input disabled={isSending} onChange={(e) => { setFiles(e.target.files) }} className="hidden" type="file" name="attachment" id="attachment" />
            <textarea
              className="flex-[0.9] p-1 border border-gray-300 rounded-lg h-[38px] outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
            <button
              disabled={isSending}
              className="flex-[0.1] bg-primary-500 text-white text-2xl p-2 rounded-lg h-[38px] flex items-center justify-center"
              onClick={handleSendMessage}
            >
              {isSending ? <FaSpinner className="animate-spin" /> : <AiOutlineSend />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
