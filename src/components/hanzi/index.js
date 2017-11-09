import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import hanziList from '../../data/hanzi-list';

class Hanzi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };

    this.show = this.show.bind(this);
  }

  show() {
    this.setState({
      hidden: false,
    });
  }

  render() {
    const { match } = this.props;
    const { hidden } = this.state;
    const id = parseInt(match.params.id, 10);
    const index = id - 1;
    const keyword = hanziList[index].k;
    const traditionalCharacter = hanziList[index].t;

    return (
      <div className="Hanzi">
        <p>{keyword}</p>
        <p style={{ fontSize: '4em' }}>
          {
            hidden ?
              '?' :
              traditionalCharacter
          }
        </p>
        <button type="button" onClick={this.show}>
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
  }
}

Hanzi.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Hanzi;
