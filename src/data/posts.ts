import { Post } from "../interfaces/post.interface";

import postImage from "../assets/post-images/post1.jpg";
import { faker } from "@faker-js/faker";

function getFakePost(): Post {
  return {
    id: faker.number.int(),
    author: faker.person.fullName(),
    title: faker.word.words(5),
    body: faker.lorem.paragraphs(2),
    tag: faker.word.words(1),
    date: "May 7, 2019",
    image: postImage,
  };
}

const getPosts = (count: number): Post[] => {
  const posts: Post[] = [];

  for (let i = 0; i < count; i++) {
    posts.push(getFakePost());
  }

  return posts;
};

const posts: Post[] = getPosts(8);

export { posts };
