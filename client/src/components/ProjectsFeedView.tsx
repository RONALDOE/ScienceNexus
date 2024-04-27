import React, { useEffect, useState } from "react";
import ProjectCard from "@components/custom_components/ProjectCard";
import { IProject, ICategory } from "@utils/interfaces";
interface FeedViewProps {
  feedLoader: () => Promise<IProject[]>;
  categoriesLoader: () => Promise<ICategory[]>;
  filtredLoader: (category: ICategory) => Promise<IProject[]>;
}

const ProjectsFeedView: React.FC<FeedViewProps> = ({
  feedLoader,
  // categoriesLoader,
  // filtredLoader,
}) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [categories, setCategories] = useState<ICategory[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState<
  //   ICategory | undefined
  // >(undefined);
  useEffect(() => {
    const loadFeed = async () => {
      try {
        setLoading(true);
        // const loadedCategories = await categoriesLoader();
        // setCategories(loadedCategories);
        // if (selectedCategory !== undefined) {
        //   const loadedPosts = await filtredLoader(selectedCategory);
        //   setProjects(loadedPosts);
        // } else {
          const loadedPosts = await feedLoader();
          setProjects(loadedPosts);
        // }
        setLoading(false); // Establecer loading a false una vez que los datos se han cargado
      } catch (error) {
        console.error("Error al cargar el feed:", error);
        setLoading(false); // En caso de error, asegurarse de establecer loading a false
      }
    };

    loadFeed();
  // }, [selectedCategory]); // Dependencia feedLoader para ejecutar el efecto cada vez que feedLoader cambie
}, []); // Dependencia feedLoader para ejecutar el efecto cada vez que feedLoader cambie

  // const handleCategoryChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   console.log(event.target.value);
  //   const categoryId = event.target.value;
  //   const category = categories.find(
  //     (category) => category.id.toString() === categoryId
  //   );
  //   setSelectedCategory(category);
  // };
  // if (categories.length === 0 || !projects) {
  //   return null;
  // }
  
  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <div className='flex flex-row'>
        {/* <select onChange={handleCategoryChange}>
          <option value=''>Todas las categorías</option>
          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          ))}
        </select> */}
      </div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
            {projects.map((project, index) => (
               <ProjectCard key={index} project={project} />
            ))}
        </>
      )}
    </div>
  );
};

export default ProjectsFeedView;
