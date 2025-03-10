import mongoose from 'mongoose'
import config from '../config/config.js'

export const connect = () =>{
    mongoose.connect(config.MONGO_URI)
    .then(()=>{
        console.log("conected to DB")
    })
    .catch((err)=>{
        console.log(err)
    })
}
export default connect;