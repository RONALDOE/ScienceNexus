import React, { useState } from "react";
import { IPost } from "@utils/interfaces";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import UserImage from "@components/custom_components/UserImage";
import {
  FavoriteBorder,
  ChatBubbleOutline,
  Favorite,
  BookmarkBorder,
  Bookmark,
} from "@mui/icons-material";
import axios from "axios";
interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { id, title, content, user, createdAt, updatedAt, saved, liked, likes } =post;
  const [isLiked, setIsLiked] = useState(saved);
  const [isSaved, setIsSaved] = useState(liked);
  const [postLikes, setPostLikes] = useState(likes);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  const handleLike = async () => {
    try {
      if (isLiked) {
        // Si ya le dio like, eliminar el like
        await axios.post(`${import.meta.env.VITE_API}/posts/${id}/like/`, {
          userId: 1,
        });
        setPostLikes((prev) => prev - 1);
      } else {
        // Si no le ha dado like, agregar el like
        await axios.post(`${import.meta.env.VITE_API}/posts/${id}/like/`, {
          userId: 1,
        });
        setPostLikes((prev) => prev + 1);

      }
      // Actualizar el estado de isLiked después de completar la operación
      setIsLiked((prev) => !prev);
    } catch (error) {
      console.error("Error al procesar el like:", error);
      // Manejar errores de manera adecuada (mostrar mensaje de error, etc.)
    }
  };

  const handleSave = async () => {
    try {
      if (isSaved) {
        // Si ya está guardado, eliminar el post guardado
        await axios.post(`${import.meta.env.VITE_API}/posts/${id}/save/`, {
          userId: 1,
        });
      } else {
        // Si no está guardado, guardar el post
        await axios.post(`${import.meta.env.VITE_API}/posts/${id}/save/`, {
          userId: 1,
        });
      }
      // Actualizar el estado de isSaved después de completar la operación
      setIsSaved((prev) => !prev);
    } catch (error) {
      console.error("Error al procesar la acción de guardar:", error);
      // Manejar errores de manera adecuada (mostrar mensaje de error, etc.)
    }
  };

  return (
    <div className='w-[80%] border-2 border-black rounded flex flex-col p-4'>
          <Link to={`/user/${user.id}`}>
      <div className='flex flex-row justify-center items-center gap-4 max-w-max'>
        <div className='w-12 h-12'>
          <UserImage Initials={user.username} />
        </div>

        <p>
          {user.username}
          <br />
          {user.badge}
        </p>
      </div>
        </Link>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='max-w-max border-b-black border-2 px-4 capitalize'>
          <Link to={`/post/${id}`}>
            <h2 className='font-bold text-2xl capitalize'>{title}</h2>
          </Link>
        </div>
        <p className='text-justify'>{content}</p>
      </div>

      <div className='post-details mt-2'>
        <p>{updatedAt !== createdAt ? `Published at: ${formatDate(updatedAt)}` : `Published at: ${formatDate(createdAt)}`}</p>
      </div>  
      <div className='flex flex-row justify-around items-center gap-4 w-full mt-4'>
        <IconButton onClick={handleLike} sx={{position:"static"}} disableRipple>
          {isLiked ? (
            <Favorite sx={{ fontSize: "2rem" }} />
          ) : (
            <FavoriteBorder sx={{ fontSize: "2rem" }} />
          )} {postLikes}
        </IconButton>
        <Link to={`/post/${id}/#comments`}>
          <IconButton sx={{position:"static"}} disableRipple>
            <ChatBubbleOutline sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Link>
        <IconButton onClick={handleSave} sx={{position:"static"}} disableRipple>
          {isSaved ? (
            <Bookmark sx={{ fontSize: "2rem" }} />
          ) : (
            <BookmarkBorder sx={{ fontSize: "2rem" }} />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Post;
