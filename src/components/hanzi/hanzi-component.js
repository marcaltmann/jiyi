import React, { Component } from 'react';
import Swipeable from 'react-swipeable';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from 'components/header/header-container';

const RIGHT = '-1';
const LEFT = '+1';

class HanziComponent extends Component {
  onSwiped = (direction) => {
    const { currentPage, prevIsDisabled, nextIsDisabled, history } = this.props;

    if (direction === LEFT && !nextIsDisabled) {
      history.push(`/${currentPage + 1}`);
    } else if (direction === RIGHT && !prevIsDisabled) {
      history.push(`/${currentPage - 1}`);
    }
  }

  render() {
    const { character, onClick } = this.props;

    return (
      <div className="Hanzi">
        <Header />
        <Swipeable
          className="swipe"
          trackMouse
          style={{ touchAction: 'none' }}
          preventDefaultTouchmoveEvent
          onSwipedLeft={() => this.onSwiped(LEFT)}
          onSwipedRight={() => this.onSwiped(RIGHT)}
        >
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
                {character.character.traditional || character.character}
              </p> :
              null
          }
        </Swipeable>
      </div>
    );
  }
}

HanziComponent.propTypes = {
  character: PropTypes.object.isRequired,
  prevIsDisabled: PropTypes.bool.isRequired,
  nextIsDisabled: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HanziComponent;
