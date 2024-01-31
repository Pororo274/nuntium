import { posts } from "../../../data/posts";
import { tags } from "../../../data/tags";
import Container from "../../app/container";
import PostItem from "../../post/post-item";

export default function Posts() {
  return (
    <section className="mt-24">
      <Container className="grid grid-cols-12">
        <div className="flex justify-between gap-28 col-start-2 col-span-10">
          <main className="flex flex-col">
            {posts.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
          </main>
          <aside>
            <h3 className="text-xl font-bold">tags.</h3>
            <ul className="flex flex-col gap-3 mt-3">
              {tags.map((tag) => (
                <li key={tag}>
                  <a href="" className="text-base hover:underline">
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
