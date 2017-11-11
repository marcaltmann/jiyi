import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FooterComponent from './footer-component.js';

const mapStateToProps = (state, ownProps) => ({
  currentPage: parseInt(ownProps.match.params.id, 10),
});

const mapDispatchToProps = (dispatch) => ({

});

const Footer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterComponent));

export default Footer;
