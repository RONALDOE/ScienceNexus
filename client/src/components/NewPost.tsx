import React, { useState } from 'react';

interface NewPostProps {
  open: boolean;
  handleClose: () => void;
}

const NewPost: React.FC<NewPostProps> = ({ open, handleClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleCreatePost = () => {
    // Aquí puedes implementar la lógica para enviar los datos del nuevo post al servidor
    console.log('Enviando datos del nuevo post:', { title, content, image });

    // Cierra el modal después de enviar el formulario
    handleClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50  flex items-center justify-center ${
        open ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow-md w-96 z-[2147483647]">
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Crear Post
        </button>
        <button
          onClick={handleClose}
          className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default NewPost;
