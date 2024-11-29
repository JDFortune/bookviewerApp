export const titleToUrl = (title: string) => {
  return title.replace(/[ ']+/g,'-').toLowerCase();
}

export const formatChapterContent = (content: string) => {
  return content.split("\n\n");
}