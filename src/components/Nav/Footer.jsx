function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <h3>SOCIALS</h3>
      <a href="https://www.instagram.com/taylord.beautyx/" target="_blank">
        <img
          src="./src/assets/Instagram_logo_2016.svg.webp"
          alt="instagram logo"
          className="insta-logo"
        />
      </a>
      <p>Copyright © {currentYear} Taylor'd Beauty - All Rights Reserved.</p>
    </footer>
  );
}
export default Footer;
