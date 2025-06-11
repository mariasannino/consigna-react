import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-branding">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <div className="footer-social">
        <a
          href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fes%2Elinkedin%2Ecom%2Fin%2Fmariasanninomezquita"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗
        </a>
        <a
          href="https://github.com/mariasannino"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻
        </a>
      </div>
    </footer>
  );
}

export default Footer;
