import jwt from 'jsonwebtoken';
import userModel from '../model/userModel.js';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    req.user = user; // Attach the user object to req.user
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
};

export default authMiddleware;