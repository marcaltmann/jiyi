import React from 'react';
import PropTypes from 'prop-types';
import './header-component.css';

const HeaderComponent = ({ currentId, total, onReshuffleClick }) => (
  <header className="Header">
    <p className="Header-info">
      {currentId} / {total}
    </p>

    <button type="button" className="Header-reshuffle" onClick={onReshuffleClick}>
      Reshuffle
    </button>
  </header>
);

HeaderComponent.propTypes = {
  currentId: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onReshuffleClick: PropTypes.func.isRequired,
};

export default HeaderComponent;
