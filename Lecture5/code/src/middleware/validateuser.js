export default function validateUser(req, res, next) {
  const { email } = req.body;
  if (!(email.includes('@'))) {
    return res.status(400).json({ error: 'email must have @' });
  }
  next();
}