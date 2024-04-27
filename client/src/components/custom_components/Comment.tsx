import { IComment } from "@utils/interfaces";
import UserImage from "@components/custom_components/UserImage";
import { Link } from "react-router-dom";

interface CommentProps {
    comment: IComment;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, content, createdAt } = comment;


  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  return (
    <div className="w-[60%] border-2 border-black rounded flex flex-col p-4" >
      <Link to={`/user/${user.id}`}>
      <div className="flex flex-row justify-center items-center gap-4 max-w-max">
        
      <UserImage Initials={user.username} />
        <p>
          {user.username}
          <br />
          {user.badge}
        </p>
      </div>
      </Link>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-left w-[80%]">{content}</p>
      </div>

      <div className="post-details mt-2">
        <p>Published at: {formatDate(createdAt)}</p>
      </div>
  
    </div>
  );
};

export default Comment;
