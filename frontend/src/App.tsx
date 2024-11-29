import { useState, useEffect } from 'react'
import './assets/book_viewer.css'
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Toc } from './types';
import bookService from './services/bookServices';


function App() {
  const [toc, setToc] = useState<Toc>({book: '', chapters: []});
  const [chapterContent, setChapterContent] = useState<string[]>([]);
  const [subheading, setSubheading] = useState('Table of Contents');

  useEffect(() => {
    bookService
      .getToc()
      .then(tableOfContents => setToc(tableOfContents));
  }, []);


  return (
    <div id="layout">
      <Navbar
        chapters={toc.chapters}
        setChapterContent={setChapterContent}
        setSubheading={setSubheading}
      />
      <Main
        chapters={toc.chapters}
        setChapterContent={setChapterContent}
        chapterContent={chapterContent}
        setSubheading={setSubheading}
        subheading={subheading}
      />
    </div>
  )
}

export default App
