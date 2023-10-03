import "./footer.scss";

const Footer = ({ footer }) => {
  return (
    <div className="footer">
      <a className="footer__vk">О ВКонтакте</a>
      <p className="years">© 2006-2023</p>
      <div className="footer__info">
        <a className="footer__link">О ВКонтакте</a>
        <a className="footer__link">Правила</a>
        <a className="footer__link">Для бизнеса</a>
        <a className="footer__link">Разработчикам</a>
      </div>
      <div className="footer__language">
        <a className="footer__link">Русский</a>
        <a className="footer__link">Українська</a>
        <a className="footer__link">все языки »</a>
      </div>
    </div>
  );
};

export default Footer;
