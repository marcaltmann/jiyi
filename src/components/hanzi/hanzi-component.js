import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from 'components/header/header-container';
import Footer from 'components/footer/footer-container';

import './hanzi-component.css';

const HanziComponent = ({ character, onClick }) => (
  <div className="Hanzi">
    <Header />
    <p
      className={classNames('Hanzi-keyword', { 'is-clickable': !character.shown })}
      onClick={ character.shown ? undefined : onClick }
    >
      {character.keyword}
      {
        character.description ?
          <small>{character.description}</small> :
          null
      }
    </p>

    {
      character.shown ?
        <p className="Hanzi-traditionalCharacter">
          {character.traditional}
        </p> :
        null
    }

    <Footer />
  </div>
);

HanziComponent.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HanziComponent;
