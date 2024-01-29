import { posts } from "../../../data/posts";
import PostItemBig from "../../post/post-item-big";

export default function EditorPicks() {
  return (
    <section className="pt-12">
      <div className="container">
        <h2 className="text-4xl font-bold text-center">Editor’s Picks</h2>
        <div className="w-48 h-1 bg-black-900 mx-auto mt-4"></div>
        <div className="grid grid-cols-12 mt-12">
          {posts.map((x) => (
            <div className="col-span-8 col-start-3">
              <PostItemBig post={x} key={x.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
