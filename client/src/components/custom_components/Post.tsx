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
  Bookmark
} from '@mui/icons-material';

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { _id, title, content, user, createdAt } = post;
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="w-[80%] border-2 border-black rounded flex flex-col p-4">
      <div className="flex flex-row justify-center items-center gap-4 max-w-max">
      <UserImage Initials={user.username} />

        <p>
          {user.username}
          <br />
          {user.badge}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="max-w-max border-b-black border-2 px-4 capitalize">
          <Link to={`/post/${_id}`}>
            <h2 className="font-bold text-2xl capitalize">{title}</h2>
          </Link>
        </div>
        <p className="text-justify">{content}</p>
      </div>

      <div className="post-details mt-2">
        <p>Published at: {formatDate(createdAt)}</p>

      </div>
      <div className="flex flex-row justify-around items-center gap-4 w-full mt-4">
        <IconButton onClick={handleLike} >
          {liked ? <Favorite sx={{fontSize: "2rem"}} /> : <FavoriteBorder sx={{fontSize: "2rem"}}/>}
        </IconButton>
        <Link to={`/post/:${_id}/#comments`}>
        <IconButton>
          <ChatBubbleOutline sx={{fontSize: "2rem"}}/>
        </IconButton>
        </Link>
        <IconButton onClick={handleSave}>
          {saved ? <Bookmark sx={{fontSize: "2rem"}} /> : <BookmarkBorder sx={{fontSize: "2rem"}}/>}
        </IconButton>
      </div>
    </div>
  );
};

export default Post;
