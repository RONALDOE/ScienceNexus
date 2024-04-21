import React from "react";
import { IPost } from "@utils/interfaces"; // Importa la interfaz IPost si es necesario
import UserImage from "@components/custom_components/UserImage";
import { Link } from "react-router-dom";
interface PostProps {
  post: IPost; // Propiedad que representa un objeto de tipo IPost
}

const Post: React.FC<PostProps> = ({ post }) => {
  // Aquí puedes acceder a las propiedades específicas del post
  const { title, content, user, createdAt } = post;

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  return (
    <div className=' w-[80%] border-2 border-black rounded flex flex-col p-4'>
      <div className='flex flex-row justify-center items-center gap-4 max-w-max '>
        <UserImage Initials={user.username} />
        <p>
          {user.username}
          <br />
          {user.badge   }
        </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='max-w-max border-b-black border-2 px-4 capitalize'>
            <Link to={`/post/${post._id}`}>
          <h2 className=' font-bold text-2xl capitalize'>{title}</h2>
                </Link>
        </div>
        <p className='text-justify'>{content}</p>
      </div>

      <div className='post-details mt-2'>
        <p>Published at: {formatDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default Post;
