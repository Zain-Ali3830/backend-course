import app from "./app.js";
const port = process.env.PORT || 3000
app.listen(port,()=>{
        console.log("App is running at the port :", port)
    })