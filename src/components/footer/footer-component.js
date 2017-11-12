import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer-component.css';

const FooterComponent = ({ currentPage }) => (
  <footer className="footer">
    <Link
      className="footer__link footer__link--prev"
      to={`/${currentPage - 1}`}
      title="Zurück"
    >
      ◀
    </Link>
    <Link
      className="footer__link footer__link--next"
      to={`/${currentPage + 1}`}
      title="Vor"
    >
      ►
    </Link>
  </footer>
);

FooterComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default FooterComponent;
