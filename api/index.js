//Import Required Libraries
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors")

//Import Routes
const authRouter = require("./routes/authRoutes")
const blogRoutes = require("./routes/blogRoutes")
const userRoutes = require("./routes/userRoutes")
const jobRoutes = require("./routes/jobRoutes")
const jobApplicationRoutes = require("./routes/jobApplicationRoutes")
const clientReviewRoutes = require("./routes/clientReviewRoutes")
const ourPartnerRoutes = require("./routes/ourPartnerRoutes")
const serviceRoutes = require("./routes/serviceRoutes")
const socialMediaRoutes = require("./routes/socialMediaRoutes")
const teamMemberRoutes = require("./routes/teamMemberRoutes")
const workRoutes = require("./routes/workRoutes")
const orderRoutes = require("./routes/orderRoutes")
const uploadRoutes = require("./routes/uploadRoutes")
const c_client_responseRoutes = require("./routes/c_client_responseRoutes")
const c_contactCenterServiceRoutes = require("./routes/c_contactCenterServiceRoutes")
const c_heroRoutes = require("./routes/c_heroRoutes")
const c_industryWeServeRoutes = require("./routes/c_industryWeServeRoutes")
const c_infoRoutes = require("./routes/c_infoRoutes")
const c_keyFeatureRouters = require("./routes/c_keyFeatureRouters")
const c_partnershipModelRoutes = require("./routes/c_partnershipModelRoutes")
const c_whoWeWorkWithRoutes = require("./routes/c_whoWeWorkWithRoutes")
const chatRoutes = require("./routes/chatRoutes");

//Local Environment Variables
dotenv.config();

//Connect to MongoDB database
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
        console.error(err);
    });

//Enable JSON parsing middleware
app.use(express.json());

//Enable Cross-Origin Resource Sharing (CORS) middleware
app.use(cors());

//Serve static files from the 'uploads/conversation' directory
app.use('/uploads/conversation', express.static(__dirname + '/uploads/conversation'));

//Create HTTP server and Socket.io instance
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

//Make the io to instance available globally
global.io = io;

//Handle Socket.io connections
io.on("connection", (socket) => {
    console.log(`User Connected for chat: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});

//Mount the API routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRoutes)
app.use("/api/blog", blogRoutes)
app.use("/api/client_review", clientReviewRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/job_application", jobApplicationRoutes);
app.use("/api/our_partner", ourPartnerRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/socialmedia", socialMediaRoutes);
app.use("/api/team_member", teamMemberRoutes);
app.use("/api/work", workRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/upload", uploadRoutes)

// Components
app.use("/api/client_responce", c_client_responseRoutes)
app.use("/api/contact_center_service", c_contactCenterServiceRoutes)
app.use("/api/hero", c_heroRoutes)
app.use("/api/industry_we_erve", c_industryWeServeRoutes)
app.use("/api/info", c_infoRoutes)
app.use("/api/key_feature", c_keyFeatureRouters)
app.use("/api/partnership_model", c_partnershipModelRoutes)
app.use("/api/who_we_work_with", c_whoWeWorkWithRoutes)



server.listen(8800, () => {
    console.log("Backend server is running!");
});