jest.mock('react-native-maps', () => {
  const React = require.requireActual('react');
  const MapView = require.requireActual('react-native-maps');

  const MockCallout = props => <MapView.Callout {...props} />;
  const MockMarker = props => <MapView.Marker {...props} />;
  const MockMapView = props => <MapView {...props} />;
  // class MockCallout extends React.PureComponent {
  //   render() {
  //     return React.createElement('Callout', this.props, this.props.children);
  //   }
  // }

  // class MockMarker extends React.PureComponent {
  //   render() {
  //     return React.createElement('Marker', this.props, this.props.children);
  //   }
  // }
  //
  // class MockMapView extends React.PureComponent {
  //   render() {
  //     return React.createElement('MapView', this.props, this.props.children);
  //   }
  // }

  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockMapView.Marker = MockMarker;
  MockMapView.Callout = MockCallout;
  return MockMapView;
});

jest.mock('Linking', () => {
  const getInitialURL = jest.fn();
  getInitialURL.mockReturnValueOnce({ then: jest.fn() });

  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL
  };
});

jest.mock('WebView', () => 'WebView');

jest.mock('DatePickerIOS', () => 'DatePickerIOS');

// Globals

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;
