import bgImage from "../../../assets/hero-bg.jpg";
import { posts } from "../../../data/posts";
import Container from "../../app/container";
import PostBannerItem from "../../post/banner/post-banner-item";
import PostBannerLayout from "../../post/banner/post-banner-layout";
import PostIntro from "../../post/intro/post-intro";

export default function Hero() {
  return (
    <section className="mt-10">
      <Container>
        <PostBannerLayout image={bgImage} className="pl-12 pb-24">
          <PostBannerItem>
            <PostIntro post={posts[0]} />
          </PostBannerItem>
        </PostBannerLayout>
      </Container>
    </section>
  );
}
