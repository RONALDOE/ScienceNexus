import Layout from "@components/Layout";
import { useEffect, useState } from "react";
import { IPost, IComment } from "@utils/interfaces";
import { useParams } from "react-router-dom";
import Post from "@components/custom_components/Post";
import Axios from "axios";
import Comment from "@components/custom_components/Comment";
interface IPostFetch {
  post: IPost;
  comments: IComment[];
}
export default function PostView() {
  const [post, setPost] = useState<IPost>();
  const [comments, setComments] = useState<IComment[]>([]);
  const postId = useParams<{ id: string }>().id;

  useEffect(() => {
    const fetchPost = async (id: string) => {
      await Axios.get<IPostFetch>(`${import.meta.env.VITE_API}/post/${id}`)
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
        </div>
    </Layout>
  );
}
