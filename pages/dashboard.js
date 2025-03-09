import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Ambil data user
    fetch('/api/auth')
      .then((res) => res.json())
      .then((data) => {
        if (!data.user) router.push('/');
        setUser(data.user);
      });

    // Ambil file user
    fetch('/api/upload')
      .then((res) => res.json())
      .then((data) => setFiles(data.files));
  }, []);

  const deleteFile = (fileId) => {
    fetch(`/api/delete?id=${fileId}`, { method: 'DELETE' })
      .then(() => setFiles(files.filter((file) => file.id !== fileId)));
  };

  return (
    <div>
      <h1>Dashboard {user?.name}</h1>
      <a href="/upload">Upload File</a>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} <button onClick={() => deleteFile(file.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
