import React, { useState } from "react";
import { IProject } from "@utils/interfaces";
import axios from "axios";
import UserImageView from "./UserImageView";
interface ProjectCardProps {
  project: IProject;
}

const Post: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    id,
    name,
    description,
    image,
    backgroundUrl,
    category,
    isUserMember,
  } = project;
  const [isMember, setIsMember] = useState(isUserMember);

  const handleFollow = async () => {
    try {
      if (isMember) {
        // Si ya está guardado, eliminar el post guardado
        await axios.post(`${import.meta.env.VITE_API}/project/${id}/follow/`, {
          userId: 1,
        });
      } else {
        // Si no está guardado, guardar el post
        await axios.post(`${import.meta.env.VITE_API}/project/${id}/follow/`, {
          userId: 1,
        });
      }
      // Actualizar el estado de isSaved después de completar la operación
      setIsMember((prev) => !prev);
    } catch (error) {
      console.error("Error al procesar la acción de guardar:", error);
      // Manejar errores de manera adecuada (mostrar mensaje de error, etc.)
    }
  };

  return (
    <div className='w-[80%] border-2 relative border-black rounded flex flex-col  min-h-96'>
      <img src={backgroundUrl} alt='' className='w-full h-52   rounded-t' />

      <div className='p-4'>
        <div className=' absolute top-5 ml-4 '>
          <UserImageView Initials={name} Image={image} />
        </div>
        <h2 className='text-2xl mt-1'>{name}</h2>
        <p className='text-md'>{description}</p>
        <div className='flex flex-row items-center justify-around'>
          <p className='px-4 py-2 rounded-md border-2 border-black mt-4'>
            {category.name}
          </p>
          {/* <div className='flex flex-row items-center gap-4'> */}
          {isMember ? (
            <button className=' px-4 py-2 rounded-md border-2 border-black' onClick={handleFollow}>
              Dejar de Seguir
            </button>
          ) : (
            <button className=' px-4 py-2 rounded-md border-2 border-black' onClick={handleFollow}>
              Seguir Proyecto
            </button>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
