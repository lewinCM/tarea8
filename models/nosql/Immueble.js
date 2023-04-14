const mongoose = require("mongoose");
const InmubleScheme = new mongoose.Schema(
  {
    n_propietario: {
      type: String,
    },
    letra: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "el email ya existe",
      }


    },
    extension: {
      type: String,
    },
    desc: {
      type: String,
    },
    n_habitaciones: {
      type: Number,
    },
    piso: {
      type: Number,
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("inmuble", InmubleScheme);