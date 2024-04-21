import React, { useEffect, useState } from 'react';
import { IPost } from "@utils/interfaces";
import Post from '@components/custom_components/Post';
interface FeedViewProps {
  feedLoader: () => IPost[]; // feedLoader ahora devuelve una promesa que resuelve en un array de IPost
}

const FeedView: React.FC<FeedViewProps> = ({  feedLoader }) => {
  const [posts, setPosts] = useState<IPost[]>([]); // Inicializamos posts como un array vacío
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadFeed = async () => {
      try {
        setLoading(true);
        // Llamar a la función feedLoader para cargar el feed
        const loadedPosts = await feedLoader(); // Esperar a que se resuelva la promesa con los posts cargados
        console.log(loadedPosts);
        setPosts(loadedPosts); // Actualizar el estado de posts con los datos cargados
        setLoading(false); // Establecer loading a false una vez que los datos se han cargado
      } catch (error) {
        console.error('Error al cargar el feed:', error);
        setLoading(false); // En caso de error, asegurarse de establecer loading a false
      }
    };

    // Llamar a loadFeed al montar el componente
    loadFeed();
  }, ); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente


  return (
    <div className='flex flex-col gap-8  justify-center items-center'>
    {loading ? (
      <p>Cargando...</p>
    ) : (
      <>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </>
    )}
  </div>  
  );
};

export default FeedView;
