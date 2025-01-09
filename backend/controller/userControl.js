import userModel from "../model/userModel";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).send({ error: "User already exists" });
    }

    const user = new userModel({
      name,
      email,
      password,
    });
    await user.save();
    res.send(user);

  } catch (error) {
    console.log(error);
    res.send("error");
  }
};

const login = async (req,res)=>{
    const {email,password} = req.body;
    const existUser = await userModel.findOne({email});

}
export default {register,login};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: "user not found" });
      }
        if (password !== user.password) {
        return res.json({ success: false, message: "wrong password" });
      }
      const token = createToken(user._id);
      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "something went wrong" });
    }
  }