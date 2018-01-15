//@flow

import { connect } from 'react-redux';
import actions from 'src/actions';
import ErrorBoundary from 'src/components/ErrorBoundary';

const { setHasError } = actions;

const mapStateToProps = ({ hasError }) => ({ hasError });

const mapDispatchToProps = dispatch => (
  {
    setHasError: hasError => dispatch(setHasError(hasError))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
