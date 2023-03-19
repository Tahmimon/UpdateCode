//Import Required Libraries
const multer = require("multer");
const path = require("path");

/**
 * Creates a configured multer upload object
 * @param {string} subfolder_path - The subdirectory where files should be uploaded
 * @param {string[]} allowed_file_types - Array of allowed file types
 * @param {number} max_file_size - Maximum allowed file size in bytes
 * @param {number} max_number_of_files - Maximum number of files allowed to upload
 * @param {string} error_msg - Error message to send if file type is not allowed
 * @returns {object} Multer upload object
 */

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    max_number_of_files,
    error_msg
) {
    // File upload folder
    const UPLOADS_FOLDER = `${__dirname}/../uploads/${subfolder_path}/`;

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName =
                file.originalname
                    .replace(fileExt, "")
                    .toLowerCase()
                    .split(" ")
                    .join("-") +
                "-" +
                Date.now();

            cb(null, fileName + fileExt);
        },
    });

    // prepare the final multer upload object
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size,
        },
        fileFilter: (req, file, cb) => {
            if (req.files.length > max_number_of_files) {
                cb(new Error(`Maximum ${max_number_of_files} files are allowed to upload!`));
            } else if (!allowed_file_types.includes(file.mimetype)) {
                cb(new Error(error_msg));
            } else {
                cb(null, true);
            }
        },
    });

    return upload;
}

module.exports = uploader;
