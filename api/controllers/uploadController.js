/**
 * Controller function to send a response after file upload is complete
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 */
const uploadFileResponse = (req, res) => {
    if (req.files) {
        res.send(req.files)
    } else {
        res.send({ error: "File uploads failed" })
    }
}

// Export the controller function
module.exports = {
    uploadFileResponse
}