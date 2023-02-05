import { Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const PageFooter = () => {
  return (
    <Container className="footer-container">
      <Row className="socials">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </Row>
      <Row className="footer-links">
        <div className="footer-link">Audio Description</div>
        <div className="footer-link">Help Center</div>
        <div className="footer-link">Gift Cards</div>
        <div className="footer-link">Media Center</div>
        <div className="footer-link">Investor Relations</div>
        <div className="footer-link">Jobs</div>
        <div className="footer-link">Terms of Use</div>
        <div className="footer-link">Privacy</div>
        <div className="footer-link">Legal Notices</div>
        <div className="footer-link">Cookie Preferences</div>
        <div className="footer-link">Impressum</div>
        <div className="footer-link">Contact Us</div>
      </Row>
      <Row className="service-btn">Service Code</Row>
      <Row className="copyrights">© 1997-2023 Netflix, Inc.</Row>
    </Container>
  );
};

export default PageFooter;
