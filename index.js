const express = require("express");
const { connectMongoDb } = require('./connection');

const app = express();
const PORT = 8002;
const urlRouter = require("./routes/url");

//connect mongodb
connectMongoDb('mongodb://127.0.0.1:27017/myapp-2').then(() => console.log("Mongo DB Connected")).catch((err) => console.log(err));

//adding url encodeing with middleware
app.use(express.urlencoded({ extended: false }));

app.use("/url",urlRouter)

app.get("/test",(req,res)=>{
    const html = `
         <h1>${"Show Details"}</h1>
        `;
        res.send(html);
})

app.listen(PORT, () => {
    console.log(`Server started: ${PORT}`);
});
