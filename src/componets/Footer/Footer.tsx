import Button from '../Button/Button';
import './Footer.css';

const LINK_COLUMNS = [
  {
    title: 'Explore',
    links: ['Furniture', 'New arrivals', 'Interior', 'Materials', 'Sale'],
  },
];

const SOCIALS = ['Instagram', 'Pinterest', 'Twitter', 'Facebook'];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="section-eyebrow">Bloome studio</span>
          <h3>Made to feel like home</h3>
        </div>

        {LINK_COLUMNS.map((column) => (
          <div className="footer__column" key={column.title}>
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__column footer__column--wide">
          <p>
            Thoughtfully designed pieces, sourced from makers who care about materials as
            much as you do.
          </p>
        </div>

        <div className="footer__newsletter">
          <h4>Stay in the loop</h4>
          <form
            className="footer__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input type="email" placeholder="Your email address" required />
            <Button variant="solid">Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Bloome Studio. All rights reserved.</span>
        <ul className="footer__socials">
          {SOCIALS.map((social) => (
            <li key={social}>
              <a href="#">{social}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;