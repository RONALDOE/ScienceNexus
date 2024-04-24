import React, { useEffect, useState } from 'react';
import Post from '@components/custom_components/Post';
import { IPost } from '@utils/interfaces';

interface FeedViewProps {
  feedLoader: () => Promise<IPost[]>; // feedLoader ahora devuelve una promesa que resuelve en un array de IPost
}

const FeedView: React.FC<FeedViewProps> = ({ feedLoader }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadFeed = async () => {
      try {
        setLoading(true);
        const loadedPosts = await feedLoader(); // Esperar a que se resuelva la promesa con los posts cargados
        setPosts(loadedPosts); // Actualizar el estado de posts con los datos cargados
        setLoading(false); // Establecer loading a false una vez que los datos se han cargado
      } catch (error) {
        console.error('Error al cargar el feed:', error);
        setLoading(false); // En caso de error, asegurarse de establecer loading a false
      }
    };

    // Llamar a loadFeed al montar el componente
    loadFeed();
  }, []); // Dependencia feedLoader para ejecutar el efecto cada vez que feedLoader cambie

  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </>
      )}
    </div>
  );
};

export default FeedView;
