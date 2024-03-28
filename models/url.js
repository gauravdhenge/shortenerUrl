const mongoose = require("mongoose");

//Schema define
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{ timestamps: { type: Number } }]
}, { timestamps: true });

const urlData = mongoose.model("urls", urlSchema);

module.exports = { urlData };
