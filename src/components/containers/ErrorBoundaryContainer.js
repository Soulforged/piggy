//@flow

import { connect } from 'react-redux';
import { setHasError } from 'src/actions';
import ErrorBoundary from 'src/components/ErrorBoundary';

const mapStateToProps = ({ hasError }) => ({ hasError });

const mapDispatchToProps = dispatch => (
  {
    setHasError: hasError => dispatch(setHasError(hasError))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
