// Example for Node.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const UserUploadAvatar = async (file) => {
  try {
    // Handle both file path (string) and file buffer (multer file object)
    const uploadOptions = {
      folder: "user_avatars",
      width: 150,
      height: 150,
      crop: "fill",
    };

    let result;
    if (typeof file === "string") {
      // File path from disk
      result = await cloudinary.uploader.upload(file, uploadOptions);
    } else {
      // File buffer from multer memory storage
      result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          uploadOptions,
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(file.buffer);
      });
    }
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading avatar to Cloudinary:", error);
    throw error;
  }
};

module.exports = {
  UserUploadAvatar,
};
