import { useState } from 'react';

export default function Upload() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles([...e.dataTransfer.files]);
  };

  const uploadFiles = () => {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    fetch('/api/upload', { method: 'POST', body: formData })
      .then(() => alert('Upload sukses!'))
      .catch(() => alert('Upload gagal!'));
  };

  return (
    <div>
      <h1>Upload File</h1>
      <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        <p>Seret & Lepas file di sini</p>
      </div>
      <button onClick={uploadFiles}>Upload</button>
    </div>
  );
}
