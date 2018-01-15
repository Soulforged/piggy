//@flow

import { connect } from 'react-redux';
import actions from 'ubex/actions';
import Map from 'ubex/components/Map';

import type { MapProps } from 'ubex/Types';

const { changePosition } = actions;

const mapStateToProps = ({ position }: MapProps) => ({ position });

const mapDispatchToProps = dispatch => (
  {
    setPosition: pos => dispatch(changePosition(pos))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
