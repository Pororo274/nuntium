import { Post } from "../../interfaces/post.interface";
import IntroBigImage from "./intro/images/intro-big-image";
import PostIntro from "./intro/post-intro";
import PostItemLayout from "./post-item-layout";

interface PostItemBigProps {
  post: Post;
}

export default function PostItemBig({ post }: PostItemBigProps) {
  return (
    <PostItemLayout>
      <IntroBigImage imagePath={post.image} />
      <PostIntro post={post} />
    </PostItemLayout>
  );
}
