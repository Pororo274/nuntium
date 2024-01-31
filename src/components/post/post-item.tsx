import { Post } from "../../interfaces/post.interface";
import IntroImage from "./intro/images/intro-image";
import PostIntro from "./intro/post-intro";
import PostItemLayout from "./post-item-layout";

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <PostItemLayout>
      <IntroImage imagePath={post.image} />
      <PostIntro post={post} />
    </PostItemLayout>
  );
}
