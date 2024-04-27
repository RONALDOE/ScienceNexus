import Layout from "@components/Layout";
import { useEffect, useState } from "react";
import { IPost, IComment } from "@utils/interfaces";
import { useParams } from "react-router-dom";
import Post from "@components/custom_components/Post";
import axios from "axios";
import Comment from "@components/custom_components/Comment";
interface IPostFetch {
  post: IPost;
  comments: IComment[];
}
export default function PostView() {
  const [post, setPost] = useState<IPost>();
  const [comments, setComments] = useState<IComment[]>([]);
  const postId = useParams<{ id: string }>().id;

  const [newComment, setNewComment] = useState<string>('');
  
  const handleSubmitComment = async () => {
    try {
      // Realizar la solicitud POST al backend para agregar el comentario
      const response = await axios.post(
        `${import.meta.env.VITE_API}/comments/${postId}/comments`,
        {
          content: newComment,
          userId: "1",
          postId: postId
        }
      );
      // Verificar si la solicitud fue exitosa
      if (response.status === 201) {
        // Actualizar el estado de los comentarios para reflejar el nuevo comentario
        // Esto puede requerir una recarga de los comentarios, dependiendo de cómo esté implementada tu lógica
       
        console.log("Comentario agregado correctamente");
        location.reload();
      }
    } catch (error) {
      console.error("Error al agregar el comentario:", error);
    }
  };


  useEffect(() => {
    const fetchPost = async (id: string) => {
      await axios.get<IPostFetch>(`${import.meta.env.VITE_API}/post/${id}/?userId=1`)
        .then((response) => {
            setPost(response.data.post);
            setComments(response.data.comments);
        })
        .catch((error) => {
          throw error;
        });
    };
    fetchPost(postId!);
  }, []);

  return (
    <Layout>
      <div className='flex flex-col gap-4  justify-center items-center'>
      {post ? <Post post={post} /> : <p>Cargando...</p>}
      <div
      
          className='flex flex-col gap-2 justify-center items-center w-full'
          id='comments'
        >
      {comments.length > 0 ? (
            comments.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))
          ) : (
            <p>No hay comentarios</p>
          )}
        </div>
        <div className="w-[60%] border-2 border-black rounded flex flex-col p-4">
      {/* Tu código existente para mostrar el comentario */}
      {/* Agregar un formulario para que los usuarios puedan enviar un nuevo comentario */}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmitComment();
      }}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
          className="w-full h-20 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Enviar comentario
        </button>
      </form>
    </div>
        </div>
    </Layout>
  );
}


