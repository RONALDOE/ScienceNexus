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
    id: string;
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
    id: string;
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
    name: string;
    description: string;
    category: ICategory;
    user: IUser;
    backgroundUrl: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    membersQuantity: number;
    members?: IUserShort[];
    posts?: IPost[];
    isUserMember: boolean;
}

export interface ICategory{
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}