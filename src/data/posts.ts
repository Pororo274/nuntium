import { Post } from "../interfaces/post.interface";

import postImage from '../assets/post-images/post1.jpg'

export const posts: Post[] = [
  {
    id: 1,
    author: 'Rayan Gosling',
    title: 'Sample title',
    body: 'sample body',
    tag: 'nature',
    date: 'May 7, 2023',
    image: postImage
  }
];