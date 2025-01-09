import diaryModel from "../model/diaryModel.js";

const addDiary = async(req,res) =>{
    const {title,content} = req.body;
    const diary = new diaryModel({
        title,
        content
    })
    await diary.save();
    res.send(diary);
}
const removeDiary = async(req,res) =>{
    try{
        const diary = await diaryModel.findById(req.params.id);
        await diary.remove();
        // res.send(diary);
        return res.json({message: 'Diary removed successfully'});
    }
    catch(error){
        console.log(error);
    }
}
export {addDiary,removeDiary};