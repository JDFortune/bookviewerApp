import TableOfContents from './TabelOfContents';
import { TocProp } from '../types';

const Navbar: React.FC<TocProp> = ({chapters, setChapterContent, setSubheading}) => {
  return (
    <>
      <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
      </a>

      <div id='menu'>
        <div className="pure-menu">
          <a className='pure-menu-heading' href='/'>Table of Contents</a>
          
          <TableOfContents
            chapters={chapters}
            setChapterContent={setChapterContent}
            setSubheading={setSubheading}
          />
        </div>
      </div>
    </>
  )
}

export default Navbar