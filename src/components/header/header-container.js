import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from './header-component';
import { getNumCharacters } from 'reducers/root';
import { shuffleOrder } from 'actions/order';

const mapStateToProps = (state, ownProps) => ({
  currentId: parseInt(ownProps.match.params.id, 10),
  total: getNumCharacters(state),
});

const Header = withRouter(connect(
  mapStateToProps,
  { onReshuffleClick: shuffleOrder }
)(HeaderComponent));

export default Header;
