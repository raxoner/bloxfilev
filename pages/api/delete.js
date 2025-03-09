export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    
    if (!id) return res.status(400).json({ error: 'ID tidak valid' });

    res.status(200).json({ message: 'File/User berhasil dihapus' });
  } else {
    res.status(405).json({ error: 'Method tidak diizinkan' });
  }
}
