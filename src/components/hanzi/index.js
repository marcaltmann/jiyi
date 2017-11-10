import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCharacterAt } from 'reducers/root';
import HanziComponent from './hanzi-component';
import { showCharacter } from 'actions/order';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);

  return {
    id,
    character: getCharacterAt(state, id - 1),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(showCharacter(parseInt(ownProps.match.params.id) - 1));
  },
});

const Hanzi = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HanziComponent));

export default Hanzi;
