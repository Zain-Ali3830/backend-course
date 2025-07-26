export default function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
}

// ! It goes at the end of app.js, so if anything fails in routes or middleware, this handles it.