//@flow

import { connect } from 'react-redux';
import { changePosition } from 'src/actions';
import Map from 'src/components/Map';

import type { MapProps } from 'src/Types';

const mapStateToProps = ({ position }: MapProps) => ({ position });

const mapDispatchToProps = dispatch => (
  {
    setPosition: pos => dispatch(changePosition(pos))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
