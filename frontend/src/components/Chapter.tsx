const Chapter = ({content}: {content: string[]}) => {
  const style = {
    textIndent: 30,
  }

  return (
    <div>
      {content.map((p, idx) => {
        if (p.length > 150) {
          return <p key={idx} style={style}>{p}</p>
        } else {
          return <p key={idx}>{p}</p>
        }
      })}
    </div>
  )
}

export default Chapter;