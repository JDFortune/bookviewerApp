import { AllProp } from "../types";
import Content from "./Content";
import Header from "./Header";

const Main: React.FC<AllProp> = (
  {
    chapters,
    chapterContent,
    subheading,
    setChapterContent,
    setSubheading
  }
) => {
  return (
    <>
      <div id="main">
        <Header />
      </div>
      <Content
        chapters={chapters}
        chapterContent={chapterContent}
        subheading={subheading}
        setChapterContent={setChapterContent}
        setSubheading={setSubheading}
      />
    </>
  )
}

export default Main;
