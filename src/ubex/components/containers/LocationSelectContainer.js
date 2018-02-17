//@flow

import { connect } from 'react-redux';
import actions from 'ubex/actions';
import LocationSelect from 'ubex/components/LocationSelect';

import type { State } from 'ubex/types';

console.log(actions);

const { changePosition, fetchPredictions } = actions;

const mapStateToProps = ({ ubex: { predictions } }: State) => ({ predictions });

const mapDispatchToProps = dispatch => (
  {
    setPosition: pos => dispatch(changePosition(pos)),
    fetchPredictions: desc => dispatch(fetchPredictions(desc))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelect);
