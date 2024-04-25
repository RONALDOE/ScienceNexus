export interface IPost{
    id: string;
    title: string;
    content: string;
    image?: string;
    user: IUserShort
    likes: number;
    createdAt: string;
    updatedAt: string;
    liked: boolean;
    saved: boolean; 
}

export interface IUser{
    _id: string;
    username: string;
    email: string;
    image: string;
    badge: string;
}

export interface IGreetings{
    id:string;
    title: string;
    content: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

export interface IUserShort{
    _id: string;
    username: string;
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


export interface IProject{
    id: string;
    title: string;
    description: string;
    image: string;
    user: IUser;
    createdAt: string;
    updatedAt: string;
    members: IUserShort[];
    posts: IPost[];
}