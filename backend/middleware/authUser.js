// backend/middleware/authUser.js
import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
  const auth = req.headers.authorization || '';
  let token = req.headers.token || null;          // 兼容自定义头
  if (auth.startsWith('Bearer ')) token = auth.slice(7).trim();

  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized: missing token' });
  if (!process.env.JWT_SECRET) {
    console.error('[authUser] Missing JWT_SECRET');
    return res.status(500).json({ success: false, message: 'Server misconfigured' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.id, role: payload.role }; // 不写到 req.body
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: err.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token' });
  }
};

export default authUser;
