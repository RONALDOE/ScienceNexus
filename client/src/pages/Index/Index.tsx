import Layout from "@components/Layout";
import FeedView from "@components/FeedView";
import { mockPosts } from "@utils/mock_Ipost";
import { useState } from "react";
import { IPost } from "@utils/interfaces";

export default function Index() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, setPosts] = useState<IPost[]>([]); // Inicializa el estado de posts con un array vacío

  const feedLoader = () => {
    // Simular la carga de posts utilizando los datos simulados
    setPosts(mockPosts); // Establecer los posts simulados en el estado
    return mockPosts; // Devolver los posts simulados
  };

  return (
    <Layout>
      <FeedView  feedLoader={feedLoader} />
    </Layout>
  );
}
