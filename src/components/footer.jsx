
export default function Footer() {
  const myProfileLink = 'https://github.com/red1code';
  const currentYear = () => new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear()}
        <a href={myProfileLink} target='_blank'> Red1Dev</a></p>
    </footer>
  )
}
