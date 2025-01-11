import jwt from 'jsonwebtoken';
import userModel from '../model/userModel.js';

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded user:", decoded);  // Log the decoded user details
      const user = await userModel.findById(decoded.id);
      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
      }
  
      req.user = user;
      next();
    } catch (error) {
      console.error('Authentication error:', error);
      res.status(401).json({ success: false, message: 'Authentication failed' });
    }
  };
  

export default authMiddleware;