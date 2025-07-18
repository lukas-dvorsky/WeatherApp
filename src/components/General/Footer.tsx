
interface Props {
    texts: string[]
}

function Footer({texts} : Props) {
  return (
    <footer>
        {texts.map((text, index) => {
            return <p key={index}>{text}</p>
        })}
    </footer>
  )
}

export default Footer
