//@flow

import { connect } from 'react-redux';
import actions from 'src/actions';
import ErrorBoundary from 'src/components/ErrorBoundary';

const { setError } = actions;

const mapStateToProps = ({ ui: { error } }) => ({ error });

const mapDispatchToProps = dispatch => (
  {
    setError: error => dispatch(setError(error))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
