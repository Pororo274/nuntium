import bgImage from "../../../assets/post-images/post-intro-banner.jpg";
import { posts } from "../../../data/posts";
import Container from "../../app/container";
import PostBannerItem from "../../post/banner/post-banner-item";
import PostBannerLayout from "../../post/banner/post-banner-layout";
import PostIntro from "../../post/intro/post-intro";

export default function HomePostIntro() {
  return (
    <section className="mt-16">
      <Container>
        <PostBannerLayout image={bgImage} className="pr-20 py-12">
          <PostBannerItem className="col-start-8">
            <PostIntro post={posts[0]} />
          </PostBannerItem>
        </PostBannerLayout>
      </Container>
    </section>
  );
}
