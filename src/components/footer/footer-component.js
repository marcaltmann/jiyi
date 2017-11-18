import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterComponent = ({ currentPage, prevIsDisabled, nextIsDisabled }) => (
  <footer className="footer">
    {
      prevIsDisabled ?
        <span
          className="footer__link footer__link--disabled footer__link--prev"
        >◀</span> :
        <Link
          className="footer__link footer__link--prev"
          to={`/${currentPage - 1}`}
          title="Zurück"
        >◀</Link>
    }
    {
      nextIsDisabled ?
        <span
          className="footer__link footer__link--disabled footer__link--next"
        >►</span> :
        <Link
          className="footer__link footer__link--next"
          to={`/${currentPage + 1}`}
          title="Vor"
        >►</Link>
    }
  </footer>
);

FooterComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  prevIsDisabled: PropTypes.bool.isRequired,
  nextIsDisabled: PropTypes.bool.isRequired,
};

export default FooterComponent;
