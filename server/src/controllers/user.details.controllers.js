const { UserUploadAvatar } = require("../utility/user.avatar.utility");
const User = require("../models/user.models");

const UserUpdateAvatar = async (req, res) => {
  try {
    const id = req.user.id;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }
    const imageUrl = await UserUploadAvatar(file);

    const user = await User.findByIdAndUpdate(
      id,
      { avatar: imageUrl },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Avatar updated", sucess: true, user: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const UserUpdateDetail = async (req, res) => {
  try {
    const id = req.user.id;

    // Support both JSON bodies and multipart/form-data text fields (multer.upload.none())
    const body = req.body || {};
    const { fullname, phone, gender, dob, country, city, postal, address } =
      body;

    if (
      !fullname ||
      !phone ||
      !gender ||
      !dob ||
      !country ||
      !city ||
      !postal ||
      !address
    ) {
      return res.status(400).json({ message: "Please enter valid fields" });
    }

    // Parse dob: accept 'dd/mm/yyyy', 'dd-mm-yyyy', or ISO 'yyyy-mm-dd'
    let parsedDob = null;
    if (dob instanceof Date) parsedDob = dob;
    else if (typeof dob === "string") {
      // dd/mm/yyyy or dd-mm-yyyy
      const parts = dob.split(/[-\\/]/);
      if (parts.length === 3) {
        // determine if format is dd/mm/yyyy or yyyy-mm-dd
        if (parts[0].length === 4) {
          // yyyy-mm-dd
          const iso = `${parts[0]}-${parts[1].padStart(
            2,
            "0"
          )}-${parts[2].padStart(2, "0")}`;
          parsedDob = new Date(iso);
        } else {
          // assume dd/mm/yyyy
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          const year = parseInt(parts[2], 10);
          parsedDob = new Date(year, month, day);
        }
      } else {
        parsedDob = new Date(dob);
      }
    }

    if (!parsedDob || Number.isNaN(parsedDob.getTime())) {
      return res.status(400).json({ message: "Invalid date format for dob" });
    }

    // Convert postal to number
    const parsedPostal = Number(postal);
    if (Number.isNaN(parsedPostal)) {
      return res.status(400).json({ message: "Invalid postal code" });
    }

    const userInfo = {
      userInfo: {
        fullname,
        phone,
        gender,
        dob: parsedDob,
      },

      userAddress: {
        country,
        city,
        postal: parsedPostal,
        address,
      },
    };

    const user = await User.findByIdAndUpdate(id, userInfo, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User details updated",
      sucess: true,
      user: user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const UserAccessDetail = async (req, res) => {
  try {
    const id = req.user.id;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password, ...rest } = user.toObject();
    res.json({
      message: "User access details fetched",
      sucess: true,
      user: rest,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  UserUpdateAvatar,
  UserUpdateDetail,
  UserAccessDetail,
};
