/**
 * Renders the contacts section in the footer with phone, email, working hours, and social links.
 *
 * @return {JSX.Element} The contacts footer section JSX
 */
const ContactsFooter = () => {
  return (
    <section className="footer-contacts">
      <h5>Контакты:</h5>
      <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">
        +7 495 79 03 5 03
      </a>
      <span className="footer-contacts-working-hours">
        Ежедневно: с 09-00 до 21-00
      </span>
      <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">
        office@bosanoga.ru
      </a>
      <div className="footer-social-links">
        <div className="footer-social-link footer-social-link-twitter"></div>
        <div className="footer-social-link footer-social-link-vk"></div>
      </div>
    </section>
  );
};
export default ContactsFooter;
