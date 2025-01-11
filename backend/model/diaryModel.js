import mongoose from 'mongoose';

const diarySchema = mongoose.Schema({
    title : {type:String, required: true},
    content : {type:String,required:true},
    date : {type :Date,default : Date.now()},
    email : {type:String,required:true}
})
const diaryModel = mongoose.model("diary",diarySchema);
export default diaryModel;