export type User = {
  id: string;
  avatar: string;
  name: string;
  userName: string;
  posts?: Post[];
  description: string;
};

export type Post = {
  content: string;
  id: string;
  likedBy: User[];
  createdBy: {
    id: string;
    name: string;
    email: string;
    userName: string;
  };
  repliedToPost?: Post;
  replies?: Post[];
  repliedToPst?: boolean;
};

export type UserActivity = {
  user: User;
  message: string;
};
