//@flow

import { connect } from 'react-redux';
import actions from 'ubex/actions';
import LocationSelect from 'ubex/components/LocationSelect';

import type { State } from 'ubex/types';

const { fetchPredictions, setPositionById } = actions;

const mapStateToProps = ({ ubex: { predictions } }: State) => ({ predictions });

const mapDispatchToProps = dispatch => (
  {
    fetchPredictions: desc => dispatch(fetchPredictions(desc)),
    setPositionById: id => dispatch(setPositionById(id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelect);
