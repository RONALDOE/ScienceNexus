export interface IPost{
    _id: string;
    title: string;
    content: string;
    image?: string;
    user: IUser
    likes: number;
    createdAt: string;
    updatedAt: string;
}

export interface IUser{
    _id: string;
    username: string;
    email: string;
    image: string;
    badge: string;
}

export interface IComment{
    _id: string;
    content: string;
    user: IUser;
    postId: string;
    createdAt: string;
    updatedAt: string;
}