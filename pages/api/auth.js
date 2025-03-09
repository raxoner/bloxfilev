export default function handler(req, res) {
  if (req.query.provider === 'github') {
    res.redirect('https://github.com/login/oauth/authorize?client_id=GITHUB_CLIENT_ID');
  } else {
    res.status(400).json({ error: 'Provider tidak valid' });
  }
}
