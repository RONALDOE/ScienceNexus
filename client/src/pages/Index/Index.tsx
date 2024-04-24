import {  useState } from 'react';
import Layout from '@components/Layout';
import FeedView from '@components/FeedView';
import axios from 'axios';
import { IPost } from '@utils/interfaces';

const Index = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setPosts] = useState<IPost[]>([]);

  const feedLoader = async () => {
    try {
      const response = await axios.get<IPost[]>(`${import.meta.env.VITE_API}/posts/popular?userId=1`);
      if (response.data) {
        console.log('Posts cargados:', response.data)
        setPosts(response.data);
        return response.data;
      } else {
        console.error('La respuesta no contiene datos válidos:', response);
        return [];
      }
    } catch (error) {
      console.error('Error al cargar los posts:', error);
      return [];
    }
  };


  return (
    <Layout>
      <FeedView feedLoader={feedLoader} />
    </Layout>
  );
};

export default Index;
