import { Post } from "../../../interfaces/post.interface";

interface PostIntroProps {
  post: Post;
}

export default function PostIntro({ post }: PostIntroProps) {
  return (
    <div className="flex-1">
      <p className="text-xl text-gray">{post.tag.toUpperCase()}</p>
      <h3 className="text-3xl text-black font-bold">{post.title}</h3>
      <div className="flex gap-2 items-center mt-3">
        <p className="text-gray">{post.author}</p>
        <div className="w-1 h-1 rounded-full bg-gray"></div>
        <p className="text-gray">{post.date} (10 mins read)</p>
      </div>
      <p className="mt-2">{post.body}</p>
    </div>
  );
}
