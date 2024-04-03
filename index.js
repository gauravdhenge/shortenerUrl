const express = require("express");
const { connectMongoDb } = require('./connection');
const  {urlData}  = require('./models/url')
const app = express();
const PORT = 8002;
const urlRouter = require("./routes/url");

//connect mongodb
connectMongoDb('mongodb://127.0.0.1:27017/myapp-2').then(() => console.log("Mongo DB Connected")).catch((err) => console.log(err));

//adding url encodeing with middleware
app.use(express.urlencoded({ extended: false }));


app.use("/url", urlRouter)

app.get("/:shortid", async (req, res) => {
    const shortid = req.params.shortid;
    console.log("shortid:",shortid)

    const entry = await urlData?.findOneAndUpdate({ shortid }, {
        $push: {
            visitHistory: { timestamps: Date.now(), }
        },
    });
    console.log("entry:",entry)
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => {
    console.log(`Server started: ${PORT}`);
});
