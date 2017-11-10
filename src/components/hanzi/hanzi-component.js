import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './hanzi-component.css';

const HanziComponent = ({ id, character, onClick }) => (
  <div className="Hanzi">
    <p>{character.k}</p>
    <p className="Hanzi-traditionalCharacter">
      {
        character.shown ?
          character.t :
          '?'
      }
    </p>
    <button type="button" onClick={onClick}>
      Anzeigen
    </button>
    <p>
      <Link to={`/${id - 1}`}>zurück</Link>
      {' '}
      |
      {' '}
      <Link to={`/${id + 1}`}>vor</Link>
    </p>
  </div>
);

HanziComponent.propTypes = {
  id: PropTypes.number.isRequired,
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HanziComponent;
