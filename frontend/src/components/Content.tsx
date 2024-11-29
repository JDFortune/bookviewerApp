import { AllProp } from "../types";
import TableOfContents from "./TabelOfContents";
import Chapter from "./Chapter";

const Content: React.FC<AllProp> = (
  {
    chapters,
    subheading,
    chapterContent,
    setChapterContent,
    setSubheading
  }
) => {
  const content = () => {
    if (subheading === 'Table of Contents') {
      return <TableOfContents
                chapters={chapters}
                setChapterContent={setChapterContent}
                setSubheading={setSubheading}
              />
    } else {
      return <Chapter content={chapterContent} />
    }
  }

  return (
    <div className="content">
      <h2 className="content-subhead">{subheading}</h2>

      <div className="pure-menu">
        {content()}
      </div>
    </div>
  )
};

export default Content;