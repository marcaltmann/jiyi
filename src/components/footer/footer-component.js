import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterComponent = ({ currentPage, prevIsDisabled, nextIsDisabled }) => (
  <footer className="Footer">
    {
      prevIsDisabled ?
        <span
          className="Footer-link Footer-link--prev is-disabled"
        >◀</span> :
        <Link
          className="Footer-link Footer-link--prev"
          to={`/${currentPage - 1}`}
          title="Zurück"
        >◀</Link>
    }
    {
      nextIsDisabled ?
        <span
          className="Footer-link Footer-link--next is-disabled"
        >►</span> :
        <Link
          className="Footer-link Footer-link--next"
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
