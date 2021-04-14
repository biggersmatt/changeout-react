require("./Footer.css")

const Footer = () => {
  console.log("Footer");
  return (
    <footer>
      &copy;  Change Out {new Date().getFullYear()}
    </footer>
  )
}

export default Footer;