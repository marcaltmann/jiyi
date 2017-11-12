import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/footer/footer-container';

import './hanzi-component.css';

const HanziComponent = ({ character, onClick }) => (
  <div className="Hanzi">
    <p className="Hanzi-keyword">{character.keyword}</p>

    {
      character.shown ?
        <p className="Hanzi-traditionalCharacter">
          {character.traditional}
        </p> :
        <p className="Hanzi-hidden" onClick={onClick}>
          字
        </p>
    }

    <Footer />
  </div>
);

HanziComponent.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HanziComponent;
