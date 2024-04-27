import Layout from '@components/Layout';
import axios from 'axios';
import { IProject, ICategory } from '@utils/interfaces';
import ProjectsFeedView from '@components/ProjectsFeedView';
export default function ProjectFinder() {

    const feedLoader = async () => {
        try {
          const response = await axios.get<IProject[]>(`${import.meta.env.VITE_API}/project/?userId=1`);
          if (response.data) {
            console.log('Posts cargados:', response.data)
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

      const categoriesLoader = async () => {
        try {
          const response = await axios.get<ICategory[]>(`${import.meta.env.VITE_API}/categories/`);
          if (response.data) {
            return response.data;
          } else {
            console.error('La respuesta no contiene datos válidos:', response);
          return []

          }
        } catch (error) {
          console.error('Error al cargar las categorías:', error);
          return []
        }
      }
      
      const filtredLoader = async (category : ICategory) => {
        try {
          const response = await axios.get<IProject[]>(`${import.meta.env.VITE_API}/project/category/${category.id}/`);
          if (response.data) {
            return response.data;
          } else {
            console.error('La respuesta no contiene datos válidos:', response);
          return []

          }
        } catch (error) {
          console.error('Error al cargar las categorías:', error);
          return []
        }
      }

  return (
    <Layout>
        <div className=''>
      <ProjectsFeedView feedLoader={feedLoader} categoriesLoader={categoriesLoader} filtredLoader={filtredLoader}/>
        </div>
    </Layout>
  );
}
