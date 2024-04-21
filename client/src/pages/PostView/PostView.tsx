import Layout from "@components/Layout"
import { useEffect, useState } from "react"
import { IPost, IComment } from "@utils/interfaces"
import { useParams } from "react-router-dom"
import Post from "@components/custom_components/Post"
import Axios from 'axios'
import Comment from "@components/custom_components/Comment"
interface IPostFetch{
    post: IPost;
    comments: IComment[];
}
export default function PostView() {

    const [post, setPost] = useState<IPost>();
    const [comments, setComments] = useState<IComment[]>([]);
    const postId = useParams<{_id: string}>()._id

useEffect(() => {
    const fetchPost = async (id:string) => {

        const {data} = await Axios.get<IPostFetch>(`/api/post/${id}`)
        setPost(data.post)
        setComments(data.comments)


    }
    fetchPost(postId!)
    
, [postId]})

    
  return (
    <Layout>
    <div className="flex flex-col gap-4  justify-center items-center">
        {post ? (
            <Post post={post}/>
        ) : (
            <p>Cargando...</p>
        )}
    <div className="flex flex-col gap-2 justify-center items-center" id="comments">
        {comments.map((comment, index) => (
            <Comment comment={comment} key={index}/>
        ))}

    </div>
    </div>
    
    </Layout>
  )
}
