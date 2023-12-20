import {app , server} from './app.js'

(async() => {
    try {
        app.listen(process.env.PORT , ()=>{
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Failed while Listen the server " , error);
        throw error
    }
})