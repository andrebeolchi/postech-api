export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePostData {
  title: string;
  content: string;
}

export interface UpdatePostData {
  id: string;
  title?: string;
  content?: string;
}

export interface PostsRepository {
  create(data: CreatePostData): Promise<void>;

  getAll(): Promise<Post[]>;

  getById(id: string): Promise<Post | null>;

  update(data: UpdatePostData): Promise<void>;

  delete(id: string): Promise<void>;
}