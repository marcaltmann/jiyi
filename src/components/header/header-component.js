import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({ currentId, total, onReshuffleClick }) => (
  <header className="Header">
    <p>
      {currentId} / {total}
    </p>

    <button type="button" className="Button Button--default Header-reshuffle" onClick={onReshuffleClick}>
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
