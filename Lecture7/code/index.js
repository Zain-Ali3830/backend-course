import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 3000
app.listen(port,()=>{
        console.log("App is running at the port :", port)
    })

    console.log("Password is:", process.env.PASSWORD);
