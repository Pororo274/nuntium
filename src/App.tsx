import Header from "./components/app/header";
import EditorPicks from "./components/views/home/editor-picks";
import Hero from "./components/views/home/hero";
import HomePostIntro from "./components/views/home/home-post-intro";
import Posts from "./components/views/home/posts";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <EditorPicks />
      <HomePostIntro />
      <Posts />
    </>
  );
}
