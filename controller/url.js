const { urlData } = require('../models/url')
const shortid = require("shortid");

async function generateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url)
        return res.status(400).json({ msg: "Wrong Paramter" })
    const shortId = shortid();
    await urlData.create({ shortId: shortId, redirectUrl: body.url, visitHistory: [] });
    return res.json({ id: shortId });
}



module.exports = { generateNewShortUrl }