import { TocProp } from "../types";
import { titleToUrl, formatChapterContent } from '../utils';
import bookServices from "../services/bookServices";

const TableOfContents: React.FC<TocProp> = ({chapters, setChapterContent, setSubheading}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const title: string = e.currentTarget.textContent as string;
    const chapterPath: string = titleToUrl(title);

    if (chapterPath) {
      bookServices
        .getChapter(chapterPath)
        .then(data => {
          setChapterContent(formatChapterContent(data));
          setSubheading(title)
     });
    }
  }

  return (
    <ul className="pure-menu-list">
        {chapters.map(chapter => {
          return (
          <li className="pure-menu-item" key={'toc' + chapter}>
            <a
              href={titleToUrl(chapter)}
              onClick={handleClick}
              className="pure-menu-link"
            >{chapter}</a>
          </li>
          )
        })}
    </ul>
  )
}

export default TableOfContents;