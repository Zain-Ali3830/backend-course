export const bookValidation = (req, res, next) => {
    const { title, author,price } = req.body;
    if (!title || !author||!price) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    next();
};