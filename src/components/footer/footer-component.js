import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer-component.css';

const FooterComponent = ({ currentPage }) => (
  <footer className="footer">
    <Link className="footer__link footer__link--prev" to={`/${currentPage - 1}`}>
      ◀
    </Link>
    <Link className="footer__link footer__link--next" to={`/${currentPage + 1}`}>
      ►
    </Link>
  </footer>
);

FooterComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default FooterComponent;
