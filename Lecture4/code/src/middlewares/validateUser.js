export default function validateUser(req, res, next) {
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }
  next();
}

// !This will run before the createUser() controller in the POST /api/users route.