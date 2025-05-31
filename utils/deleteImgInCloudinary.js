const cloudinary = require("cloudinary").v2;

const deleteImgInCloudinary = async (link) => {
  const firstIndex = link.lastIndexOf("/") + 1;
  const lastIndex = link.lastIndexOf(".");
  const imgId = link.substring(firstIndex, lastIndex);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    const result = await cloudinary.uploader.destroy(imgId);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteImgInCloudinary;
