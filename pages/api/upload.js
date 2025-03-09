export default function handler(req, res) {
  if (req.method === 'POST') {
    const files = req.body.files;
    
    if (!files || files.length > 10) return res.status(400).json({ error: 'Maksimal 10 file' });

    files.forEach((file) => {
      if (file.size > 15 * 1024 * 1024) return res.status(400).json({ error: 'File terlalu besar' });
    });

    res.status(200).json({ message: 'Upload sukses' });
  } else {
    res.status(405).json({ error: 'Method tidak diizinkan' });
  }
}
