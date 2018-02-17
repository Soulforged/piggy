//@flow

import { connect } from 'react-redux';
import actions from 'ubex/actions';
import Map from 'ubex/components/Map';

import type { State } from 'ubex/types';

const { changePosition, showPredictions } = actions;

const mapStateToProps = ({ ubex: { position } }: State) => ({ position });

const mapDispatchToProps = dispatch => (
  {
    setPosition: pos => dispatch(changePosition(pos)),
    showPredictions: () => dispatch(showPredictions())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
