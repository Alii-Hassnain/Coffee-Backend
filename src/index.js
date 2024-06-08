
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})

connectDB();



// ( async ()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",() =>{
//             console.log("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on http://localhost:${PORT}`);
//         })


//     } catch (error) {
//         console.log("ERROR:",error);
//         throw error;
//     }
// })()