import diaryModel from "../model/diaryModel.js";

const addDiary = async (req, res) => {
  const { title, content } = req.body;
  const { email } = req.user;

  try {
    const diary = new diaryModel({
      title,
      content,
      email
    });
    await diary.save();
    res.status(201).json({ success: true, diary });
  } catch (error) {
    console.error('Error adding diary:', error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
  }
};

const removeDiary = async (req, res) => {
  try {
    const diary = await diaryModel.findById(req.params.id);
    if (!diary) {
      return res.status(404).json({ success: false, message: 'Diary not found' });
    }
    await diary.remove();
    res.json({ success: true, message: 'Diary removed successfully' });
  } catch (error) {
    console.error('Error removing diary:', error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
  }
};

const getDiary = async (req, res) => {
  const { email, date } = req.body;
  try {
    const diary = await diaryModel.findOne({ email, date });
    if (!diary) {
      return res.status(404).json({ success: false, message: 'Diary entry not found' });
    }
    res.status(200).json({ success: true, diary });
  } catch (error) {
    console.error('Error fetching diary:', error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
  }
};

export { addDiary, removeDiary, getDiary };