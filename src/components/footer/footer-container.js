import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FooterComponent from './footer-component.js';
import { getNumCharacters } from 'reducers/root';

const mapStateToProps = (state, ownProps) => {
  const currentPage = parseInt(ownProps.match.params.id, 10);

  return {
    currentPage,
    prevIsDisabled: currentPage <= 1,
    nextIsDisabled: currentPage >= getNumCharacters(state),
  };
};

const mapDispatchToProps = (dispatch) => ({

});

const Footer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterComponent));

export default Footer;
