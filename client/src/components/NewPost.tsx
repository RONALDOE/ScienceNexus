import React, { useState } from 'react';
import axios from 'axios';
import { Backdrop } from '@mui/material';

interface NewPostProps {
  open: boolean;
  handleClose: () => void;
}

const NewPost: React.FC<NewPostProps> = ({ open, handleClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleCreatePost = () => {
    // Verificar que ningún campo esté vacío
    if (!title || !content || !image) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Aquí puedes implementar la lógica para enviar los datos del nuevo post al servidor
    console.log('Enviando datos del nuevo post:', { title, content, image });
    sendPost(title, content, image, '1');

    // Cierra el modal después de enviar el formulario
    handleClose();
  };

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: '#fff',
      }}
      open={open}
      onClick={handleClose}
    >
      <div className="bg-white p-4 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Nuevo Post</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border rounded resize-none"
          rows={4}
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleCreatePost}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
        >
          Crear Post
        </button>
        <button
          onClick={handleClose}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </Backdrop>
  );
};

export default NewPost;

const sendPost = async (title: string, content: string, image: string, userId: string) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API}/post`, {
      title,
      content,
      image,
      userId,
    });
    console.log('Post creado:', response.data);
  } catch (error) {
    console.error('Error al crear el post:', error);
  }
};
