const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs/promises");

const uploadImgTocloud = async (tempUpload, destination, filename) => {
  const resultUpload = path.join(destination, filename);
  await fs.rename(tempUpload, resultUpload);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const options = {
    use_filename: true,
    unique_filename: true,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(resultUpload, options);
    await fs.unlink(resultUpload);
    return result.url;
  } catch (error) {
    console.error(error);
  }
};

module.exports = uploadImgTocloud;
