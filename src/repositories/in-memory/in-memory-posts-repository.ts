import { randomUUID } from "crypto";

import { CreatePostData, Post, PostsRepository, UpdatePostData } from "../posts-repository";

export class InMemoryPostsRepository implements PostsRepository {
  public posts: Post[] = []

  async create(data: CreatePostData): Promise<void> {
    this.posts.push({
      id: randomUUID(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }

  async getAll(): Promise<Post[]> {
    return this.posts
  }

  async getById(id: string): Promise<Post | null> {
    return this.posts.find(post => post.id === id) || null
  }

  async update(data: UpdatePostData): Promise<void> {
    this.posts = this.posts.map(post => {
      if (post.id === data.id) {
        return {
          ...post,
          ...data.title && { title: data.title },
          ...data.content && { content: data.content },
          updatedAt: new Date()
        }
      }

      return post
    })
  }

  async delete(id: string): Promise<void> {
    this.posts = this.posts.filter(post => post.id !== id)
  }
}